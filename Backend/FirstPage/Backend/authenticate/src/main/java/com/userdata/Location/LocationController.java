package com.userdata.Location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class LocationController {
     
     @Autowired
     private LocationService locationService ;

     @GetMapping("/product-form")
     public String showAddProductForm() {
         return "AddVehicle.html";
     }
     
     @GetMapping("/show-data")
     public List<Country> showData() {
         
        return this.locationService.getStateByCountryId(1);
     }

     @PostMapping("/submit-vehicle")
     public String submitVehicle()
     {
        return "Login.html";
     }

}
