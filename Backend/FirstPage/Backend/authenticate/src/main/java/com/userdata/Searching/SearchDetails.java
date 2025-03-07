package com.userdata.Searching;

import java.time.LocalDate;

public class SearchDetails {

     private String searchCountry ;
     private String searchState ;
     private String searchCity ;
     private LocalDate pickupDate ;
     private LocalDate returnDate ;
     private String classType ;    

     public SearchDetails(){

     }

     public SearchDetails(String searchCountry, String searchState, String searchCity, LocalDate pickupDate, LocalDate returnDate, String classType){
          this.searchCountry = searchCountry ;
          this.searchState = searchState ;
          this.searchCity = searchCity ;
          this.pickupDate = pickupDate ;
          this.returnDate = returnDate ;
          this.classType = classType ;
     }

     public String getSearchCountry() {
          return searchCountry;
     }

     public void setSearchCountry(String searchCountry) {
          this.searchCountry = searchCountry;
     }

     public String getSearchState() {
          return searchState;
     }

     public void setSearchState(String searchState) {
          this.searchState = searchState;
     }

     public String getSearchCity() {
          return searchCity;
     }

     public void setSearchCity(String searchCity) {
          this.searchCity = searchCity;
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

     public String getClassType() {
          return classType;
     }

     public void setClassType(String classType) {
          this.classType = classType;
     }
     
}
