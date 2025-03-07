package com.userdata.Searching;

import java.time.LocalDate;

import com.userdata.VehicleType.PassengerVehicle.car;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
public class bookedCar { 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    private String vehicleType ;
    private int vehicleId ;
    private LocalDate pickupDate;
    private LocalDate returnDate;

     public bookedCar()
     {}

     public int getBookingId() {
          return bookingId;
     }

     public void setBookingId(int bookingId) {
          this.bookingId = bookingId;
     }
     
     public String getVehicleType() {
          return vehicleType;
     }

     public void setVehicleType(String vehicleType) {
          this.vehicleType = vehicleType;
     }

     public int getVehicleId() {
          return vehicleId;
     }

     public void setVehicleId(int vehicleId) {
          this.vehicleId = vehicleId;
     }

     public LocalDate getPickupDate() {
          return pickupDate;
     }

     public void setPickupDate(LocalDate pickupDate) {
          this.pickupDate = pickupDate;
     }

     public LocalDate getReturnDate() {
          return returnDate;
     }

     public void setReturnDate(LocalDate returnDate) {
          this.returnDate = returnDate;
     }

}
