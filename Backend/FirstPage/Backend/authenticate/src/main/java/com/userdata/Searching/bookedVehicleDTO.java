package com.userdata.Searching;

import java.time.LocalDate;

public class bookedVehicleDTO {
     
    private String country;
    private String state;
    private String city;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private String vehicleClass ;
    private String vehicleType ;
    private int vehicleId ;

     public String getCountry() {
          return country;
     }
     public String getState() {
          return state;
     }
     public String getCity() {
          return city;
     }
     public LocalDate getPickupDate() {
          return pickupDate;
     }
     public LocalDate getReturnDate() {
          return returnDate;
     }
     public String getVehicleClass() {
          return vehicleClass;
     }
     public String getVehicleType() {
          return vehicleType;
     }
     public int getVehicleId() {
          return vehicleId;
     }

     

}
