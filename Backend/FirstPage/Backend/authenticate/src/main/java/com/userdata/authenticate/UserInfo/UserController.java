package com.userdata.authenticate.UserInfo;

import jakarta.validation.Valid;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.userdata.Searching.SearchDetails;
import com.userdata.VehicleType.PassengerVehicle.PassengerVehicle;
import com.userdata.VehicleType.PassengerVehicle.bike;
import com.userdata.VehicleType.PassengerVehicle.bus;
import com.userdata.VehicleType.PassengerVehicle.car;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.CarService;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.PassengerVehicleService;
import com.userdata.authenticate.CheckData.FirstConfig;
import com.userdata.authenticate.SendOtp.EmailService;
import com.userdata.authenticate.SendOtp.OtpService;
import com.userdata.authenticate.UserInfo.VehicleManage.Vehicle;
import com.userdata.authenticate.UserInfo.VehicleManage.VehicleService;

import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class UserController {

    @Autowired
    private FirstConfig firstConfig;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private OtpService otpService ;

    @Autowired
    private EmailService emailService ;

    @Autowired
    private PassengerVehicleService passengerVehicleService;

    @Autowired
    private CarService findVehicleService;

   
    @GetMapping("/test")
    public String testPage() {
        return "test";
    }

    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }

    @GetMapping("/addvehicle-form")
    public String showAddVehicleForm(Model model) {
        return "AddVehicle";
    }

    @GetMapping("/forgotpassword-form")
    public String showforgotpasswordForm(Model model) {
        return "forgotpassword";
    }

    @GetMapping("/resetpassword")
    public String showChangepasswordForm(Model model) {
        return "ChangePassword";
    }

    @GetMapping("/findvehicle")
    public String showFindVehicleForm(Model model) {
        return "searchvehicle";
    }
   

    @PostMapping("/User/register")
    @ResponseBody
    public ResponseEntity<String> submitForm(@Valid @RequestBody User user) {
        System.out.println("Received User Data: " + user);

        // Save user to the database
        user.setConfirm_password(firstConfig.passwordEncoder().encode(user.getPassword()));
        User saveUser = userRepository.save(user);
        System.out.println("Stored User Data: " + saveUser);

        if (saveUser != null) {
            return ResponseEntity.ok("User registered successfully!");
        } else {
            return ResponseEntity.badRequest().body("Email already exists!");
        }
    
    }

    @GetMapping("/login-form")
    public String showLoginForm(Model model) {
        return "login";
    }

    @PostMapping("/User/login")
    @ResponseBody
    public ResponseEntity<?> checkUserData(@RequestBody UserDTO userDetails) {
 
        User user1 = userRepository.getUserByEmail(userDetails.getEmail());

        System.out.println("-----------**-----------" + user1 + "-----------**-----------");

        if (user1 != null && user1.getPassword().equals(userDetails.getPassword())) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/vehicle/addvehicle")
    @ResponseBody
    public ResponseEntity<Map<String, String>> addVehicleDetails(@RequestBody Vehicle vehicle)  {
      
        Map<String, String> response = new HashMap<>();
       
        if(vehicle.getCategory().equals("passenger_vehicle")){

            PassengerVehicle passengerVehicle1 = new PassengerVehicle();
            
            if(vehicle.getType().equals("Car")){

                car car1 = new car();
                //vehicle Info
                car1.setVehicleName(vehicle.getVehicleName());
                car1.setVehicleNumber(vehicle.getVehicleNumber());
                car1.setVehicleType(vehicle.getType());
                //location
                car1.setLocationCity(vehicle.getCity());
                car1.setLocationState(vehicle.getState());
                car1.setLocationCountry(vehicle.getCountry());
                //Extra Info
                car1.setSeatingCapacity(vehicle.getSeatingCapacity());
                car1.setFuelType(vehicle.getFuelType());
                car1.setTransmission(vehicle.getTransmission());
                car1.setNumOfWheels(vehicle.getNumOfWheels());
                car1.setVehicleRentPrice(vehicle.getRentPrice());
                car1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                car1.setBooked(false);

                //It's set passenger vehicle is car type
                passengerVehicle1.setPassengerVehicleId(102);
                car1.setPassengerVehicle(passengerVehicle1);

                List<car> carList = new ArrayList<car>();
                carList.add(car1);
                passengerVehicle1.setCarList(carList);

                //save vehicle object
                vehicleService.saveVehicle(vehicle);
                passengerVehicleService.saveVehicle(passengerVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
                
            }else if(vehicle.getType().equals("Bike"))
            {
                bike bike1 = new bike();
 
                bike1.setVehicleName(vehicle.getVehicleName());
                bike1.setVehicleNumber(vehicle.getVehicleNumber());
                bike1.setVehicleType(vehicle.getType());
    
                bike1.setLocationCity(vehicle.getCity());
                bike1.setLocationState(vehicle.getState());
                bike1.setLocationCountry(vehicle.getCountry());
    
                bike1.setSeatingCapacity(vehicle.getSeatingCapacity());
                bike1.setFuelType(vehicle.getFuelType());
                bike1.setTransmission(vehicle.getTransmission());
                bike1.setNumOfWheels(vehicle.getNumOfWheels());
                bike1.setVehicleRentPrice(vehicle.getRentPrice());
                bike1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                bike1.setBooked(false);
                
                //It's set passenger vehicle is bike type
                passengerVehicle1.setPassengerVehicleId(101);
                bike1.setPassengerVehicle(passengerVehicle1);

                List<bike> bikeList = new ArrayList<bike>();
                bikeList.add(bike1);
                passengerVehicle1.setBikeList(bikeList);

                vehicleService.saveVehicle(vehicle);
                passengerVehicleService.saveVehicle(passengerVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);

            }else if(vehicle.getType().equals("Bus"))
            {
                bus bus1 = new bus();
                
                bus1.setVehicleName(vehicle.getVehicleName());
                bus1.setVehicleNumber(vehicle.getVehicleNumber());
                bus1.setVehicleType(vehicle.getType());

                bus1.setLocationCity(vehicle.getCity());
                bus1.setLocationState(vehicle.getState());
                bus1.setLocationCountry(vehicle.getCountry());

                bus1.setSeatingCapacity(vehicle.getSeatingCapacity());
                bus1.setFuelType(vehicle.getFuelType());
                bus1.setTransmission(vehicle.getTransmission());
                bus1.setNumOfWheels(vehicle.getNumOfWheels());
                bus1.setVehicleRentPrice(vehicle.getRentPrice());
                bus1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                bus1.setBooked(false);

                //It's set passenger vehicle is bus type
                passengerVehicle1.setPassengerVehicleId(103);
                bus1.setPassengerVehicle(passengerVehicle1);

                List<bus> busList = new ArrayList<bus>();
                busList.add(bus1);
                passengerVehicle1.setBusList(busList);

                vehicleService.saveVehicle(vehicle);
                passengerVehicleService.saveVehicle(passengerVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
            }


        }else if(vehicle.getCategory() == "agriculture_vehicle")
        {



        }else if(vehicle.getCategory() == "construction_vehicle")
        {



        }else if(vehicle.getCategory() == "commercial_vehicle")
        {



        }
            response.put("message", "Vehicle category not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        
    }

    @PostMapping("/vehicle/search")
    @ResponseBody
    public ResponseEntity<Map<String, List<car>>> searchVehicle(@RequestBody SearchDetails searchDetails) {
        
        Map<String, List<car>> response = new HashMap<>();

        List<car> carList = findVehicleService.findCars(searchDetails.getSearchCountry(), searchDetails.getSearchState(), searchDetails.getSearchCity(), 102);

        if (carList == null) {
            carList = new ArrayList<>();
        }

        if (!carList.isEmpty()) {
            response.put("vehicles_found", carList);
            return ResponseEntity.ok(response);
        } else {
            response.put("vehicles_found", new ArrayList<>());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }


    public boolean checkEmail( String email) {
        
        User user1 = userRepository.getUserByEmail(email);

        System.out.println("-----------**-----------" + user1 + "-----------**-----------");

        if(user1 != null && (user1.getEmail().equals(email))){

            return true ;
        }
        return false ; 
    }

     @PostMapping("/validate-email") 
     @ResponseBody
    public ResponseEntity<Map<String, Object>> sendOTP(@RequestBody Map<String, String> request) {

        String email = request.get("email");

        Map<String, Object> response = new HashMap<>();

        // Validate email
        if (email != null) {
            
            boolean isRegisteredEmail = checkEmail(email);
         
            if (isRegisteredEmail) {
                

                String otp = "Your Otp is :" + otpService.generateOtp() ;

                boolean emailResponse = emailService.sendEmail(otp, email);

                if(emailResponse){
                    response.put("success", true);
                    response.put("message", "Otp sent successfully!");
                    return ResponseEntity.ok(response);
                }
                else {

                    response.put("success", false);
                    response.put("message", "Failed to send otp: ");
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
                }

            } else {

                response.put("success", false);
                response.put("message", "Your Email is not registered");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);

            }
        } else {
            response.put("success", false);
            response.put("message", "Invalid Email.");
            return ResponseEntity.badRequest().body(response);
        }
    }
    

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request) {
        String enteredOtp = request.get("otp");

        if (otpService.validateOtp(enteredOtp)) {
            return ResponseEntity.ok(Map.of("message", "OTP verified successfully", "success", true));
        } else {
            return ResponseEntity.ok(Map.of("message", "Invalid Otp", "success", false));
        }
    }
    
    @PostMapping("/reset-password")
    @ResponseBody
    public ResponseEntity<Map<String,String>> resetPassword(@RequestBody Map<String, String> request) {
       
        Map<String,String> response = new HashMap<>();

        String password = request.get("newPassword");
        String email = request.get("email");

        System.out.println("Password : " + password + " email : " + email);

            String encodedPassword = firstConfig.passwordEncoder().encode(password);

            int updatedRaw = userRepository.updateUserPassword(email , password , encodedPassword);

            if (updatedRaw > 0 ) {
                
                response.put("sucess", "true");
                response.put("message", "Password updated successfully!");
                return ResponseEntity.ok(response);

            }
            else
            {
                response.put("sucess", "false");
                response.put("message", "Something went wronge!!");
                return ResponseEntity.ok(response);
            }
        
    }
    
    //Search Vehicle
    @PostMapping("/searchVehicle")
    @ResponseBody
   public ResponseEntity<Map<String, List<Vehicle>>> searchingVehicle(@RequestBody Map<String, String> request) {
        Map<String, List<Vehicle>> response = new HashMap<>();

        String country = request.get("country");
        String state = request.get("state");
        String city = request.get("city");

        System.out.println("Country: " + country + " | State: " + state + " | City: " + city);

        List<Vehicle> vehicle = vehicleService.findVehicleByLocation(country, state, city);
        
        if (vehicle == null) {
            vehicle = new ArrayList<>();
        }

        System.out.println("Vehicle: " + vehicle);

        if (!vehicle.isEmpty()) {
            response.put("vehicles_found", vehicle);
            return ResponseEntity.ok(response);
        } else {
            response.put("vehicles_found", new ArrayList<>());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }



    //verify React is working or not
    @GetMapping("/temp")
    @ResponseBody
    public Map<String, String> tempRoute() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "hello from temp");
        return response;
    }

}










