package com.userdata.VehicleType.CommercialVehicle;

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
@Table(name = "Commercial_Vehicle")
public class CommercialVehicle {
     
     @Id
     int commercialVehicleId;

     @OneToOne
     @JoinColumn(name = "OwnerVehicles")
     private User user ;

     @OneToMany(mappedBy = "commercialVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Cargo> cargoList;  


     @OneToMany(mappedBy = "commercialVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Trailer> trailerList;  


     @OneToMany(mappedBy = "commercialVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Truck> truckList;

     public CommercialVehicle() {
          this.commercialVehicleId = 0;
          this.cargoList = null;
          this.trailerList = null;
          this.truckList = null;
          this.user = null ;
     }

     public int getCommercialVehicleId() {
          return commercialVehicleId;
     }

     public void setCommercialVehicleId(int commercialVehicleId) {
          this.commercialVehicleId = commercialVehicleId;
     }

     public User getUser() {
          return user;
     }

     public void setUser(User user) {
          this.user = user;
     }

     public List<Cargo> getCargoList() {
          return cargoList;
     }

     public void setCargoList(List<Cargo> cargoList) {
          this.cargoList = cargoList;
     }

     public List<Trailer> getTrailerList() {
          return trailerList;
     }

     public void setTrailerList(List<Trailer> trailerList) {
          this.trailerList = trailerList;
     }

     public List<Truck> getTruckList() {
          return truckList;
     }

     public void setTruckList(List<Truck> truckList) {
          this.truckList = truckList;
     }

     

}