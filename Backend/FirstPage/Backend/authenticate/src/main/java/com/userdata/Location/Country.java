package com.userdata.Location;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Country {
     
     @Id
     private int countryId ;
     private String countryName ;

     @OneToMany(mappedBy = "country", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonManagedReference
     private List<State> states;

     public int getCountryId() {
          return countryId;
     }
     public void setCountryId(int countryId) {
          this.countryId = countryId;
     }
     public String getCountryName() {
          return countryName;
     }
     public void setCountryName(String countryName) {
          this.countryName = countryName;
     }
     public List<State> getStates() {
          return states;
     }
     public void setStates(List<State> states) {
          this.states = states;
     }
     
     public Country(int countryId, String countryName, List<State> states) {
          this.countryId = countryId;
          this.countryName = countryName;
          this.states = states;
     }

     public Country()
     {

     }
     @Override
     public String toString() {
          return "Country [countryId=" + countryId + ", countryName=" + countryName + ", states=" + states + "]";
     }
}
