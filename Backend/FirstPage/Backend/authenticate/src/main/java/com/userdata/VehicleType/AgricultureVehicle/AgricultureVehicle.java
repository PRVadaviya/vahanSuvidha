package com.userdata.VehicleType.AgricultureVehicle;

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
@Table(name = "Agriculture_Vehicle")
public class AgricultureVehicle {
     
     @Id
     int agricultureVehicleId;

     // @OneToOne
     // @JoinColumn(name = "OwnerVehicles")
     // private User user ;

     @OneToMany(mappedBy = "agricultureVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Harvester> harvesterList;  


     @OneToMany(mappedBy = "agricultureVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Tractor> tractorList;  

     public AgricultureVehicle() {
          this.agricultureVehicleId = 0;
          this.harvesterList = null;
          this.tractorList = null;
          // this.user = null ;
     }

     public int getAgricultureVehicleId() {
          return agricultureVehicleId;
     }

     public void setAgricultureVehicleId(int agricultureVehicleId) {
          this.agricultureVehicleId = agricultureVehicleId;
     }

     // public User getUser() {
          // return user;
     // }

     // public void setUser(User user) {
          // this.user = user;
     // }

     public List<Harvester> getHarvesterList() {
          return harvesterList;
     }

     public void setHarvesterList(List<Harvester> harvesterList) {
          this.harvesterList = harvesterList;
     }

     public List<Tractor> getTractorList() {
          return tractorList;
     }

     public void setTractorList(List<Tractor> tractorList) {
          this.tractorList = tractorList;
     }


     
}