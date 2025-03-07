package com.userdata.VehicleType.ConstructionVehicle;

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
@Table(name = "Construction_Vehicle")
public class ConstructionVehicle {
     
     @Id
     int constructionVehicleId;

     @OneToOne
     @JoinColumn(name = "OwnerVehicles")
     private User user ;

     @OneToMany(mappedBy = "constructionVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Bulldozer> bulldozerList;  


     @OneToMany(mappedBy = "constructionVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<CementMixer> cementMixerList;  


     @OneToMany(mappedBy = "constructionVehicle", cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Roller> rollerList;

     public ConstructionVehicle() {
          this.constructionVehicleId = 0;
          this.bulldozerList = null;
          this.rollerList = null;
          this.cementMixerList = null;
          this.user = null ;
     }

     public int getConstructionVehicleId() {
          return constructionVehicleId;
     }

     public void setConstructionVehicleId(int constructionVehicleId) {
          this.constructionVehicleId = constructionVehicleId;
     }

     public User getUser() {
          return user;
     }

     public void setUser(User user) {
          this.user = user;
     }

     public List<Bulldozer> getBulldozerList() {
          return bulldozerList;
     }

     public void setBulldozerList(List<Bulldozer> bulldozerList) {
          this.bulldozerList = bulldozerList;
     }

     public List<CementMixer> getCementMixerList() {
          return cementMixerList;
     }

     public void setCementMixerList(List<CementMixer> cementMixerList) {
          this.cementMixerList = cementMixerList;
     }

     public List<Roller> getRollerList() {
          return rollerList;
     }

     public void setRollerList(List<Roller> rollerList) {
          this.rollerList = rollerList;
     }


}
