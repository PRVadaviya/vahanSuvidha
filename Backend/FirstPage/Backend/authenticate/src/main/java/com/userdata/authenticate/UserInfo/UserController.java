package com.userdata.authenticate.UserInfo;

import jakarta.validation.Valid;

import java.time.LocalDate;
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
import com.userdata.Searching.bookedCar;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureVehicle;
import com.userdata.VehicleType.AgricultureVehicle.Harvester;
import com.userdata.VehicleType.AgricultureVehicle.Tractor;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureService.AgricultureVehicleService;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureService.HarvesterService;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureService.TractorService;
import com.userdata.VehicleType.CommercialVehicle.Cargo;
import com.userdata.VehicleType.CommercialVehicle.CommercialVehicle;
import com.userdata.VehicleType.CommercialVehicle.Trailer;
import com.userdata.VehicleType.CommercialVehicle.Truck;
import com.userdata.VehicleType.CommercialVehicle.CommercialService.CargoService;
import com.userdata.VehicleType.CommercialVehicle.CommercialService.CommercialVehicleService;
import com.userdata.VehicleType.CommercialVehicle.CommercialService.TrailerService;
import com.userdata.VehicleType.CommercialVehicle.CommercialService.TruckService;
import com.userdata.VehicleType.ConstructionVehicle.Bulldozer;
import com.userdata.VehicleType.ConstructionVehicle.CementMixer;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionVehicle;
import com.userdata.VehicleType.ConstructionVehicle.Roller;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionService.BulldozerService;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionService.CementMixerService;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionService.ConstructionVehicleService;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionService.RollerService;
import com.userdata.VehicleType.PassengerVehicle.PassengerVehicle;
import com.userdata.VehicleType.PassengerVehicle.bike;
import com.userdata.VehicleType.PassengerVehicle.bus;
import com.userdata.VehicleType.PassengerVehicle.car;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.BikeService;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.BookedCarService;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.BusService;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.CarService;
import com.userdata.VehicleType.PassengerVehicle.PassengerService.PassengerVehicleService;
import com.userdata.authenticate.CheckData.FirstConfig;
import com.userdata.authenticate.SendOtp.EmailService;
import com.userdata.authenticate.SendOtp.OtpService;
import com.userdata.authenticate.UserInfo.VehicleManage.Vehicle;
import com.userdata.authenticate.UserInfo.VehicleManage.VehicleService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



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
    private BookedCarService bookedCarService ;

    @Autowired
    private PassengerVehicleService passengerVehicleService;

    @Autowired
    private CarService carService;

    @Autowired
    private BikeService bikeService;

    @Autowired
    private BusService busService;

    @Autowired
    private AgricultureVehicleService agricultureVehicleService;

    @Autowired
    private TractorService tractorService;

    @Autowired
    private HarvesterService harvesterService;

    @Autowired
    private ConstructionVehicleService constructionVehicleService ;

    @Autowired
    private BulldozerService bulldozerService ;

    @Autowired
    private CementMixerService cementMixerService ;

    @Autowired
    private RollerService rollerService ;

    @Autowired
    private CommercialVehicleService commercialVehicleService ;

    @Autowired
    private CargoService cargoService ;

    @Autowired
    private TrailerService trailerService ;

    @Autowired
    private TruckService truckService ;

    @Autowired
    private CarService findVehicleService;

    private String locationCity ="";
    private String locationState ="" ;
    private String locationCountry ="";
    private LocalDate pickupDate ;
    private LocalDate returnDate ;
   
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
    public ResponseEntity<String> submitForm(@RequestBody User user) {
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
       System.out.println(vehicle);
       System.out.println("Received Vehicle Data: " + vehicle); // ✅ Debugging
    System.out.println("Category: " + vehicle.getCategory());

        if(vehicle.getCategory().equals("passenger_vehicle")){

            PassengerVehicle passengerVehicle1 = new PassengerVehicle();
            //User user1 = new User() ;

            if(vehicle.getVehicleType().equals("Car")){

                car car1 = new car();
                //vehicle Info
                car1.setVehicleName(vehicle.getVehicleName());
                car1.setVehicleNumber(vehicle.getVehicleNumber());
                car1.setVehicleType(vehicle.getVehicleType());
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
                car1.setImageUrl(vehicle.getImageUrl());
                //It's set passenger vehicle is car type
                passengerVehicle1.setPassengerVehicleId(102);
                //user1.setId(1);
                //passengerVehicle1.setUser(user1);
                car1.setPassengerVehicle(passengerVehicle1);

                List<car> carList = new ArrayList<car>();
                carList.add(car1);
                passengerVehicle1.setCarList(carList);
                
            }else if(vehicle.getVehicleType().equals("Bike"))
            {
                bike bike1 = new bike();
 
                bike1.setVehicleName(vehicle.getVehicleName());
                bike1.setVehicleNumber(vehicle.getVehicleNumber());
                bike1.setVehicleType(vehicle.getVehicleType());
    
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
                bike1.setImageUrl(vehicle.getImageUrl());
                //It's set passenger vehicle is bike type
                passengerVehicle1.setPassengerVehicleId(101);
                bike1.setPassengerVehicle(passengerVehicle1);

                List<bike> bikeList = new ArrayList<bike>();
                bikeList.add(bike1);
                passengerVehicle1.setBikeList(bikeList);

            }else if(vehicle.getVehicleType().equals("Bus"))
            {
                bus bus1 = new bus();
                
                bus1.setVehicleName(vehicle.getVehicleName());
                bus1.setVehicleNumber(vehicle.getVehicleNumber());
                bus1.setVehicleType(vehicle.getVehicleType());

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
                bus1.setImageUrl(vehicle.getImageUrl());
                //It's set passenger vehicle is bus type
                passengerVehicle1.setPassengerVehicleId(103);
                bus1.setPassengerVehicle(passengerVehicle1);

                List<bus> busList = new ArrayList<bus>();
                busList.add(bus1);
                passengerVehicle1.setBusList(busList);

            }

            try 
            {
                //save vehicle object
                vehicleService.saveVehicle(vehicle);
                passengerVehicleService.saveVehicle(passengerVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
    
            } catch (Exception e) {
                response.put("message", "Vehicle category not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }


        }else if("agriculture_vehicle".equals(vehicle.getCategory()))
        {
            AgricultureVehicle agricultureVehicle1 = new AgricultureVehicle();

            if(vehicle.getVehicleType().equals("Tractor")){
            
                Tractor tractor1 = new Tractor() ;

                tractor1.setVehicleName(vehicle.getVehicleName());
                tractor1.setVehicleNumber(vehicle.getVehicleNumber());
                tractor1.setVehicleType(vehicle.getVehicleType());

                tractor1.setLocationCity(vehicle.getCity());
                tractor1.setLocationState(vehicle.getState());
                tractor1.setLocationCountry(vehicle.getCountry());

                tractor1.setSeatingCapacity(vehicle.getSeatingCapacity());
                tractor1.setFuelType(vehicle.getFuelType());
                tractor1.setTransmission(vehicle.getTransmission());
                tractor1.setNumOfWheels(vehicle.getNumOfWheels());
                tractor1.setVehicleRentPrice(vehicle.getRentPrice());
                tractor1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                tractor1.setBooked(false);
                tractor1.setImageUrl(vehicle.getImageUrl());
                //It's set agriculture vehicle is tractor type
                agricultureVehicle1.setAgricultureVehicleId(201);
                tractor1.setAgricultureVehicle(agricultureVehicle1);
                
                List<Tractor> tractorList = new ArrayList<Tractor>();
                tractorList.add(tractor1);
                agricultureVehicle1.setTractorList(tractorList);

            }else if(vehicle.getVehicleType().equals("Harvester")){

                Harvester harvester1 = new Harvester() ;

                harvester1.setVehicleName(vehicle.getVehicleName());
                harvester1.setVehicleNumber(vehicle.getVehicleNumber());
                harvester1.setVehicleType(vehicle.getVehicleType());

                harvester1.setLocationCity(vehicle.getCity());
                harvester1.setLocationState(vehicle.getState());
                harvester1.setLocationCountry(vehicle.getCountry());

                harvester1.setSeatingCapacity(vehicle.getSeatingCapacity());
                harvester1.setFuelType(vehicle.getFuelType());
                harvester1.setTransmission(vehicle.getTransmission());
                harvester1.setNumOfWheels(vehicle.getNumOfWheels());
                harvester1.setVehicleRentPrice(vehicle.getRentPrice());
                harvester1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                harvester1.setBooked(false);
                harvester1.setImageUrl(vehicle.getImageUrl());
                //It's set agriculture vehicle is harvester type
                agricultureVehicle1.setAgricultureVehicleId(202);
                harvester1.setAgricultureVehicle(agricultureVehicle1);
                
                List<Harvester> harvesterList = new ArrayList<Harvester>();
                harvesterList.add(harvester1);
                agricultureVehicle1.setHarvesterList(harvesterList);

            }
            
            try 
            {
                //save vehicle object
                vehicleService.saveVehicle(vehicle);
                agricultureVehicleService.saveVehicle(agricultureVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
    
            } catch (Exception e) {
                response.put("message", "Vehicle category not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }


        }else if(vehicle.getCategory().equals("construction_vehicle"))
        {
            ConstructionVehicle constructionVehicle1 = new ConstructionVehicle() ;

            if(vehicle.getVehicleType().equals("Bulldozer")){
            
                Bulldozer bulldozer1 = new Bulldozer() ;

                bulldozer1.setVehicleName(vehicle.getVehicleName());
                bulldozer1.setVehicleNumber(vehicle.getVehicleNumber());
                bulldozer1.setVehicleType(vehicle.getVehicleType());

                bulldozer1.setLocationCity(vehicle.getCity());
                bulldozer1.setLocationState(vehicle.getState());
                bulldozer1.setLocationCountry(vehicle.getCountry());

                bulldozer1.setSeatingCapacity(vehicle.getSeatingCapacity());
                bulldozer1.setFuelType(vehicle.getFuelType());
                bulldozer1.setTransmission(vehicle.getTransmission());
                bulldozer1.setNumOfWheels(vehicle.getNumOfWheels());
                bulldozer1.setVehicleRentPrice(vehicle.getRentPrice());
                bulldozer1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                bulldozer1.setBooked(false);
                bulldozer1.setImageUrl(vehicle.getImageUrl());
                //It's set construction vehicle is bulldozer type
                constructionVehicle1.setConstructionVehicleId(301);
                bulldozer1.setConstructionVehicle(constructionVehicle1);
                
                List<Bulldozer> bulldozerList = new ArrayList<Bulldozer>();
                bulldozerList.add(bulldozer1);
                constructionVehicle1.setBulldozerList(bulldozerList);


            }else if(vehicle.getVehicleType().equals("Roller")){

                Roller roller1 =new Roller() ;

                roller1.setVehicleName(vehicle.getVehicleName());
                roller1.setVehicleNumber(vehicle.getVehicleNumber());
                roller1.setVehicleType(vehicle.getVehicleType());

                roller1.setLocationCity(vehicle.getCity());
                roller1.setLocationState(vehicle.getState());
                roller1.setLocationCountry(vehicle.getCountry());

                roller1.setSeatingCapacity(vehicle.getSeatingCapacity());
                roller1.setFuelType(vehicle.getFuelType());
                roller1.setTransmission(vehicle.getTransmission());
                roller1.setNumOfWheels(vehicle.getNumOfWheels());
                roller1.setVehicleRentPrice(vehicle.getRentPrice());
                roller1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                roller1.setBooked(false);
                roller1.setImageUrl(vehicle.getImageUrl());
                //It's set construction vehicle is Roller type
                constructionVehicle1.setConstructionVehicleId(302);
                roller1.setConstructionVehicle(constructionVehicle1);
                
                List<Roller> rollerList = new ArrayList<Roller>();
                rollerList.add(roller1);
                constructionVehicle1.setRollerList(rollerList);



            }else if(vehicle.getVehicleType().equals("Cement Mixer")){

                CementMixer cementMixer1 = new CementMixer() ;

                cementMixer1.setVehicleName(vehicle.getVehicleName());
                cementMixer1.setVehicleNumber(vehicle.getVehicleNumber());
                cementMixer1.setVehicleType(vehicle.getVehicleType());

                cementMixer1.setLocationCity(vehicle.getCity());
                cementMixer1.setLocationState(vehicle.getState());
                cementMixer1.setLocationCountry(vehicle.getCountry());

                cementMixer1.setSeatingCapacity(vehicle.getSeatingCapacity());
                cementMixer1.setFuelType(vehicle.getFuelType());
                cementMixer1.setTransmission(vehicle.getTransmission());
                cementMixer1.setNumOfWheels(vehicle.getNumOfWheels());
                cementMixer1.setVehicleRentPrice(vehicle.getRentPrice());
                cementMixer1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                cementMixer1.setBooked(false);
                cementMixer1.setImageUrl(vehicle.getImageUrl());
                //It's set construction vehicle is CementMixer type
                constructionVehicle1.setConstructionVehicleId(302);
                cementMixer1.setConstructionVehicle(constructionVehicle1);
                
                List<CementMixer> cementMixersList = new ArrayList<CementMixer>();
                cementMixersList.add(cementMixer1);
                constructionVehicle1.setCementMixerList(cementMixersList);
            }

            try 
            {
                //save vehicle object
                vehicleService.saveVehicle(vehicle);
                constructionVehicleService.saveVehicle(constructionVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
    
            } catch (Exception e) {
                response.put("message", "Vehicle category not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }


        }else if("commercial_vehicle".equals(vehicle.getCategory()))
        {
            CommercialVehicle commercialVehicle1 = new CommercialVehicle() ;

            if(vehicle.getVehicleType().equals("Truck")){
            
                Truck truck1 = new Truck() ;

                truck1.setVehicleName(vehicle.getVehicleName());
                truck1.setVehicleNumber(vehicle.getVehicleNumber());
                truck1.setVehicleType(vehicle.getVehicleType());

                truck1.setLocationCity(vehicle.getCity());
                truck1.setLocationState(vehicle.getState());
                truck1.setLocationCountry(vehicle.getCountry());

                truck1.setSeatingCapacity(vehicle.getSeatingCapacity());
                truck1.setFuelType(vehicle.getFuelType());
                truck1.setTransmission(vehicle.getTransmission());
                truck1.setNumOfWheels(vehicle.getNumOfWheels());
                truck1.setVehicleRentPrice(vehicle.getRentPrice());
                truck1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                truck1.setBooked(false);
                truck1.setImageUrl(vehicle.getImageUrl());
                //It's set commercial vehicle is truck type
                commercialVehicle1.setCommercialVehicleId(401);
                truck1.setCommercialVehicle(commercialVehicle1);
                                
                List<Truck> truckList = new ArrayList<Truck>();
                truckList.add(truck1);
                commercialVehicle1.setTruckList(truckList);

            }else if(vehicle.getVehicleType().equals("Cargo")){

                Cargo cargo1 = new Cargo() ;

                cargo1.setVehicleName(vehicle.getVehicleName());
                cargo1.setVehicleNumber(vehicle.getVehicleNumber());
                cargo1.setVehicleType(vehicle.getVehicleType());

                cargo1.setLocationCity(vehicle.getCity());
                cargo1.setLocationState(vehicle.getState());
                cargo1.setLocationCountry(vehicle.getCountry());

                cargo1.setSeatingCapacity(vehicle.getSeatingCapacity());
                cargo1.setFuelType(vehicle.getFuelType());
                cargo1.setTransmission(vehicle.getTransmission());
                cargo1.setNumOfWheels(vehicle.getNumOfWheels());
                cargo1.setVehicleRentPrice(vehicle.getRentPrice());
                cargo1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                cargo1.setBooked(false);
                cargo1.setImageUrl(vehicle.getImageUrl());
                //It's set commercial vehicle is cargo type
                commercialVehicle1.setCommercialVehicleId(402);
                cargo1.setCommercialVehicle(commercialVehicle1);
                                
                List<Cargo> cargoList = new ArrayList<Cargo>();
                cargoList.add(cargo1);
                commercialVehicle1.setCargoList(cargoList);

            }else if(vehicle.getVehicleType().equals("Trailers")){

                Trailer trailer1 = new Trailer() ;

                trailer1.setVehicleName(vehicle.getVehicleName());
                trailer1.setVehicleNumber(vehicle.getVehicleNumber());
                trailer1.setVehicleType(vehicle.getVehicleType());

                trailer1.setLocationCity(vehicle.getCity());
                trailer1.setLocationState(vehicle.getState());
                trailer1.setLocationCountry(vehicle.getCountry());

                trailer1.setSeatingCapacity(vehicle.getSeatingCapacity());
                trailer1.setFuelType(vehicle.getFuelType());
                trailer1.setTransmission(vehicle.getTransmission());
                trailer1.setNumOfWheels(vehicle.getNumOfWheels());
                trailer1.setVehicleRentPrice(vehicle.getRentPrice());
                trailer1.setVehicleAdditionalInfo(vehicle.getAdditionalInfo()); 
                trailer1.setBooked(false);
                trailer1.setImageUrl(vehicle.getImageUrl());
                //It's set commercial vehicle is trailer type
                commercialVehicle1.setCommercialVehicleId(403);
                trailer1.setCommercialVehicle(commercialVehicle1);
                                
                List<Trailer> trailerList = new ArrayList<Trailer>();
                trailerList.add(trailer1);
                commercialVehicle1.setTrailerList(trailerList);
            }

            try 
            {
                //save vehicle object
                vehicleService.saveVehicle(vehicle);
                commercialVehicleService.saveVehicle(commercialVehicle1);

                response.put("message", "Vehicle added successfully!");
                return ResponseEntity.ok(response);
    
            } catch (Exception e) {
                response.put("message", "Vehicle category not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }

            response.put("message", "Vehicle category not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @PostMapping("/vehicle/booked")
    @ResponseBody
    public ResponseEntity<Map<String, String>> bookedVehicle(@RequestBody List<Vehicle> bookedCar)
    {
        Map<String, String> response = new HashMap<>();
        bookedCar bookedVehicle = new bookedCar() ;

        int bookedVehicleId = bookedCar.get(0).getVehicle_id();
        System.out.println("---------------" + bookedCar + "-------------------");
        String bookedVehicleType = bookedCar.get(0).getVehicleType();

        if(bookedVehicleType.equals("Car"))
        {
            car car1 = carService.findCarById(bookedVehicleId);
            if(car1 != null){

                //  now this vehicle is booked
                car1.setBooked(true);
                
                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);
                
                bookedCarService.saveVehicle(bookedVehicle);
                    
                response.put("message", "Car booked successfully!");
                return ResponseEntity.ok(response);

            }
            else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        
        }
        else if(bookedVehicleType.equals("Bike")){

            bike bike1 = bikeService.findBikeById(bookedVehicleId);

            if(bike1 != null)
            {
                bike1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);

                response.put("message", "Bike booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("Bus")){

            bus bus1 = busService.findBusById(bookedVehicleId);

            if(bus1 != null)
            {
                bus1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);

                response.put("message", "Bus booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("tractor")){

            Tractor tractor1 = tractorService.findTractorById(bookedVehicleId);

            if(tractor1 != null)
            {
                tractor1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Tractor booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("harvester")){

            Harvester harvester1 = harvesterService.findHarvesterById(bookedVehicleId);

            if(harvester1 != null)
            {
                harvester1.setBooked(true);
                
                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);
                
                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Harvester booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("bulldozer")){

            Bulldozer bulldozer1 = bulldozerService.findBulldozerById(bookedVehicleId);

            if(bulldozer1 != null)
            {
                bulldozer1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Bulldozer booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("roller")){

            Roller roller1 = rollerService.findRollerById(bookedVehicleId);

            if(roller1 != null)
            {
                roller1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Roller booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("cementMixer")){

            CementMixer cementMixer1 = cementMixerService.findCementMixerById(bookedVehicleId);

            if(cementMixer1 != null)
            {
                cementMixer1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);

                response.put("message", "Cement Mixer booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("truck")){

            Truck truck1 = truckService.findTruckById(bookedVehicleId);

            if(truck1 != null)
            {
                truck1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Truck booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("cargo")){

            Cargo cargo1 = cargoService.findCargoById(bookedVehicleId);

            if(cargo1 != null)
            {
                cargo1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);
                
                bookedCarService.saveVehicle(bookedVehicle);
                
                response.put("message", "Cargo booked successfully!");
                return ResponseEntity.ok(response);
            }else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        else if(bookedVehicleType.equals("trailer")){

            Trailer trailer1 = trailerService.findTrailerById(bookedVehicleId);

            if(trailer1 != null)
            {
                trailer1.setBooked(true);

                // set booked vehicle details
                bookedVehicle.setPickupDate(pickupDate);
                bookedVehicle.setReturnDate(returnDate);
                bookedVehicle.setVehicleId(bookedVehicleId);
                bookedVehicle.setVehicleType(bookedVehicleType);

                bookedCarService.saveVehicle(bookedVehicle);

                response.put("message", "Trailer booked successfully!");
                return ResponseEntity.ok(response);
            }
            else{
                response.put("message", "Vehicle not found!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }
        response.put("message", "Vehicle not found!");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);

    }

    @GetMapping("/vehicle/find/car")
    @ResponseBody
    public ResponseEntity<List<car>> findCar() {
        printLocalDetails();
        List<car> carList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            carList = carService.findCars(locationCountry,locationState,locationCity);
            System.out.println("----" + carList);
        }
        else
        {
            carList = carService.findAllCars();
            System.out.println("*******-" + carList);
        }
    
        if (carList == null) {
            carList = new ArrayList<>();
        }
        return ResponseEntity.ok(carList);
    }
    
    @GetMapping("/vehicle/find/bike")
    @ResponseBody
    public ResponseEntity<List<bike>> findBike() {
        printLocalDetails();
        List<bike> bikeList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            bikeList = bikeService.findBikes(locationCountry,locationState,locationCity);
            System.out.println("----" + bikeList);
        }
        else
        {
            bikeList = bikeService.findAllBikes();
            System.out.println("*******-" + bikeList);
        }
    
        if (bikeList == null) {
            bikeList = new ArrayList<>();
        }
        return ResponseEntity.ok(bikeList);
    }

    @GetMapping("/vehicle/find/bus")
    @ResponseBody
    public ResponseEntity<List<bus>> findBus() {
        printLocalDetails();
        List<bus> busList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            busList = busService.findBuss(locationCountry,locationState,locationCity);
            System.out.println("----" + busList);
        }
        else
        {
            busList = busService.findAllBuss();
            System.out.println("*******-" + busList);
        }
    
        if (busList == null) {
            busList = new ArrayList<>();
        }
        return ResponseEntity.ok(busList);
    }

    @GetMapping("/vehicle/find/harvester")
    @ResponseBody
    public ResponseEntity<List<Harvester>> findHarvester() {
        printLocalDetails();
        List<Harvester> harvesterList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            harvesterList = harvesterService.findHarvesters(locationCountry,locationState,locationCity);
            System.out.println("----" + harvesterList);
        }
        else
        {
            harvesterList = harvesterService.findAllHarvesters();
            System.out.println("*******-" + harvesterList);
        }
    
        if (harvesterList == null) {
            harvesterList = new ArrayList<>();
        }
        return ResponseEntity.ok(harvesterList);
    }

    @GetMapping("/vehicle/find/tractor")
    @ResponseBody
    public ResponseEntity<List<Tractor>> findTractor() {
        printLocalDetails();
        List<Tractor> tractorList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            tractorList = tractorService.findTractors(locationCountry,locationState,locationCity);
            System.out.println("----" + tractorList);
        }
        else
        {
            tractorList = tractorService.findAllTractors();
            System.out.println("*******-" + tractorList);
        }
    
        if (tractorList == null) {
            tractorList = new ArrayList<>();
        }
        return ResponseEntity.ok(tractorList);
    }

    @GetMapping("/vehicle/find/cargo")
    @ResponseBody
    public ResponseEntity<List<Cargo>> findCargo() {
        printLocalDetails();
        List<Cargo> cargoList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            cargoList = cargoService.findCargos(locationCountry,locationState,locationCity);
            System.out.println("----" + cargoList);
        }
        else
        {
            cargoList = cargoService.findAllCargos();
            System.out.println("*******-" + cargoList);
        }
    
        if (cargoList == null) {
            cargoList = new ArrayList<>();
        }
        return ResponseEntity.ok(cargoList);
    }

    @GetMapping("/vehicle/find/trailer")
    @ResponseBody
    public ResponseEntity<List<Trailer>> findTrailer() {
        printLocalDetails();
        List<Trailer> TrailerList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            TrailerList = trailerService.findTrailers(locationCountry,locationState,locationCity);
            System.out.println("----" + TrailerList);
        }
        else
        {
            TrailerList = trailerService.findAllTrailers();
            System.out.println("*******-" + TrailerList);
        }
    
        if (TrailerList == null) {
            TrailerList = new ArrayList<>();
        }
        return ResponseEntity.ok(TrailerList);
    }

    @GetMapping("/vehicle/find/truck")
    @ResponseBody
    public ResponseEntity<List<Truck>> findTruck() {
        printLocalDetails();
        List<Truck> truckList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            truckList = truckService.findTrucks(locationCountry,locationState,locationCity);
            System.out.println("----" + truckList);
        }
        else
        {
            truckList = truckService.findAllTrucks();
            System.out.println("*******-" + truckList);
        }
    
        if (truckList == null) {
            truckList = new ArrayList<>();
        }
        return ResponseEntity.ok(truckList);
    }

    @GetMapping("/vehicle/find/bulldozer")
    @ResponseBody
    public ResponseEntity<List<Bulldozer>> findBulldozer() {
        printLocalDetails();
        List<Bulldozer> bulldozerList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            bulldozerList = bulldozerService.findBulldozers(locationCountry,locationState,locationCity);
            System.out.println("----" + bulldozerList);
        }
        else
        {
            bulldozerList = bulldozerService.findAllBulldozers();
            System.out.println("*******-" + bulldozerList);
        }
    
        if (bulldozerList == null) {
            bulldozerList = new ArrayList<>();
        }
        return ResponseEntity.ok(bulldozerList);
    }

    @GetMapping("/vehicle/find/cementmixer")
    @ResponseBody
    public ResponseEntity<List<CementMixer>> findCementMixer() {
        printLocalDetails();
        List<CementMixer> cementMixerList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            cementMixerList = cementMixerService.findCementMixers(locationCountry,locationState,locationCity);
            System.out.println("----" + cementMixerList);
        }
        else
        {
            cementMixerList = cementMixerService.findAllCementMixers();
            System.out.println("*******-" + cementMixerList);
        }
    
        if (cementMixerList == null) {
            cementMixerList = new ArrayList<>();
        }
        return ResponseEntity.ok(cementMixerList);
    }

    @GetMapping("/vehicle/find/roller")
    @ResponseBody
    public ResponseEntity<List<Roller>> findRoller() {
        printLocalDetails();
        List<Roller> rollerList ;

        if(locationCity != null && pickupDate != null && returnDate != null)
        {
            rollerList = rollerService.findRollers(locationCountry,locationState,locationCity);
            System.out.println("----" + rollerList);
        }
        else
        {
            rollerList = rollerService.findAllRollers();
            System.out.println("*******-" + rollerList);
        }
    
        if (rollerList == null) {
            rollerList = new ArrayList<>();
        }
        return ResponseEntity.ok(rollerList);
    }

    // ---assign location and date in search details--- 
    
    @PostMapping("/vehicle/search")
    @ResponseBody
    public ResponseEntity<Map<String, String>> searchVehicle(@RequestBody SearchDetails searchDetails) {

        Map<String, String> response = new HashMap<>();

        locationCity = searchDetails.getSearchCity();
        locationState = searchDetails.getSearchState();
        locationCountry = searchDetails.getSearchCountry();
        pickupDate = searchDetails.getPickupDate();
        returnDate = searchDetails.getReturnDate();

        response.put("message", "Data sent successfully");
        System.out.println(pickupDate + "----***************************************-----" + returnDate);
        printLocalDetails();
         return ResponseEntity.ok(response);
    }

    public void printLocalDetails(){

        System.out.println("locationCountry" + locationCountry);
        System.out.println("locationCountry" + locationState);
        System.out.println("locationCountry" + locationCity);
        System.out.println("locationCountry" + pickupDate);
        System.out.println("locationCountry" + returnDate);
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










