package com.userdata.Location;

public class LocationInfo {

  
     private int locationId;
     private String locationCity;
     private String locationState;
     private String locationCountry;
     
     public LocationInfo() {
     }
     
     public LocationInfo(int locationId, String locationCity, String locationState, String locationCountry) {
         
          this.locationId = locationId;
          this.locationCity = locationCity;
          this.locationState = locationState;
          this.locationCountry = locationCountry;
     }
     
     public int getLocationId() {
          return locationId;
     }
     
     public void setLocationId(int locationId) {
          this.locationId = locationId;
     }
     
     public String getLocationCity() {
          return locationCity;
     }
     
     public void setLocationCity(String locationCity) {
          this.locationCity = locationCity;
     }
     
     public String getLocationState() {
          return locationState;
     }
     
     public void setLocationState(String locationState) {
          this.locationState = locationState;
     }
     
     public String getLocationCountry() {
          return locationCountry;
     }
     
     public void setLocationCountry(String locationCountry) {
          this.locationCountry = locationCountry;
     }

     @Override
     public String toString() {
          return "LocationInfo [locationId=" + locationId + ", locationCity=" + locationCity + ", locationState="
                    + locationState + ", locationCountry=" + locationCountry + "]";
     }
     
}
