package com.userdata.Searching;

import java.time.LocalDate;

import com.userdata.VehicleType.PassengerVehicle.car;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class bookedCar { 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
     
    @OneToOne 
    @JoinColumn(name = "booking_carId")
    private car car;

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

     public car getCar() {
          return car;
     }

     public void setCar(car car) {
          this.car = car;
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
