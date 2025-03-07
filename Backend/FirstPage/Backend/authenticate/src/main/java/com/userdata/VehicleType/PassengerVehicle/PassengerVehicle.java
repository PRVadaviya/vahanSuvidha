package com.userdata.VehicleType.PassengerVehicle;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.userdata.authenticate.UserInfo.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "passenger_vehicle")
public class PassengerVehicle {
     
     @Id
     int passengerVehicleId;

     @OneToOne
     @JoinColumn(name = "OwnerVehicles")
     private User user ;

     //list mapped with entity class object (there name is passengerVehicle)
     @OneToMany(mappedBy = "passengerVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<bike> bikeList;  


     @OneToMany(mappedBy = "passengerVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<car> carList;  


     @OneToMany(mappedBy = "passengerVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<bus> busList;

     public PassengerVehicle() {
          this.passengerVehicleId = 0;
          this.bikeList = null;
          this.carList = null;
          this.busList = null;
          this.user = null ;
     }

     public int getPassengerVehicleId() {
          return passengerVehicleId;
     }


     public void setPassengerVehicleId(int passengerVehicleId) {
          this.passengerVehicleId = passengerVehicleId;
     }

     public User getUser() {
          return user;
     }

     public void setUser(User user) {
          this.user = user;
     }

     public List<bike> getBikeList() {
          return bikeList;
     }


     public void setBikeList(List<bike> bikeList) {
          this.bikeList = bikeList;
     }


     public List<car> getCarList() {
          return carList;
     }


     public void setCarList(List<car> carList) {
          this.carList = carList;
     }


     public List<bus> getBusList() {
          return busList;
     }


     public void setBusList(List<bus> busList) {
          this.busList = busList;
     }  


     
    

}
