package com.userdata.Location;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class State {
     
     @Id
     private int stateId ;
     private String stateName ;

     @ManyToOne()
     @JoinColumn(name="country_state_id")
     @JsonBackReference
     private Country country ;

     @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonManagedReference
     private List<City> cities;
     
     public int getStateId() {
          return stateId;
     }

     public void setStateId(int stateId) {
          this.stateId = stateId;
     }

     public String getStateName() {
          return stateName;
     }

     public void setStateName(String stateName) {
          this.stateName = stateName;
     }

     public Country getCountry() {
          return country;
     }

     public void setCountry(Country country) {
          this.country = country;
     }
     public List<City> getCities() {
          return cities;
     }
     public void setCities(List<City> cities) {
          this.cities = cities;
     }
 

     public State(){}

     public State(int stateId, String stateName, Country country, List<City> city) {
          this.stateId = stateId;
          this.stateName = stateName;
          this.country = country;
          this.cities = city;
     }

     @Override
     public String toString() {
          return "State [stateId=" + stateId + ", stateName=" + stateName + ", country=" + country + ", city=" + cities
                    + "]";
     }


}
