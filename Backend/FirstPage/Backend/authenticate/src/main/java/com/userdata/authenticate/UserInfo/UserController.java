package com.userdata.authenticate.UserInfo;

import jakarta.validation.Valid;

import java.io.IOException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

    public String registeredEmail ;

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

    @PostMapping("/addvehicle")
    public String postMethodName(@ModelAttribute Vehicle vehicle, BindingResult result, Model model) throws IOException {

        if (result.hasErrors()) {
            return "AddVehicle";
        }

        vehicle.setBooked(false);
        vehicleService.saveVehicle(vehicle);
        model.addAttribute("message", "Vehicle added successfully!");
        return "login";
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
                //is used for reset password in this email
                registeredEmail = email ;

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
    public ResponseEntity<Map<String,String>> resetPassword(@RequestParam("password") String password , @RequestParam("confirmpassword") String confirmPassword) {
       
        Map<String,String> response = new HashMap<>();

        System.out.println("Password : " + password + " Confirm Password : " + confirmPassword);

        if(password.equals(confirmPassword)){

            String encodedPassword = firstConfig.passwordEncoder().encode(password);

            int updatedRaw = userRepository.updateUserPassword(registeredEmail , password , encodedPassword);

            if (updatedRaw > 0 ) {
                
                response.put("sucess", "true");
                response.put("message", "Password updated successfully!");
                return ResponseEntity.ok(response);

            }
            else
            {
                response.put("sucess", "false");
                response.put("message", "Email not found!");
                return ResponseEntity.ok(response);
            }
        }
        else
        {
            response.put("sucess", "false");
            response.put("message", "user Email not found!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
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










