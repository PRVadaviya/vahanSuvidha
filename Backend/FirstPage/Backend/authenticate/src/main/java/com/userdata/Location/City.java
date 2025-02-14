package com.userdata.Location;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class City {
     
     @Id
     private int cityId ;
     private String cityName ;
     @ManyToOne
     @JoinColumn(name="state_city_id" , nullable = false)
     @JsonBackReference
     private State state ;

     public int getCityId() {
          return cityId;
     }
     public void setCityId(int cityId) {
          this.cityId = cityId;
     }
     public String getCityName() {
          return cityName;
     }
     public void setCityName(String cityName) {
          this.cityName = cityName;
     }
     public State getState() {
          return state;
     }
     public void setState(State state) {
          this.state = state;
     }
       
     public City()
     {
     }

     public City(int cityId, String cityName, State state) {
          this.cityId = cityId;
          this.cityName = cityName;
          this.state = state;
     }

     @Override
     public String toString() {
          return "City [cityId=" + cityId + ", cityName=" + cityName + ", state=" + state + "]";
     }
}
