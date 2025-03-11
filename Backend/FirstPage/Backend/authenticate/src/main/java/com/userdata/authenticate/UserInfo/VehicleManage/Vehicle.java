package com.userdata.authenticate.UserInfo.VehicleManage;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicle")
public class Vehicle {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int vehicle_id;

    private String vehicleName;
    private String vehicleNumber;
    private String category;
    private String vehicleType;
    private String country;
    private String state;
    private String city;
    private Integer seatingCapacity;
    private String fuelType;
    private String transmission;
    private Integer numOfWheels;
    private Double rentPrice;
    private String additionalInfo;
    private boolean isBooked = false ; 
    private String imageUrl ;
    public int getVehicle_id() {
        return vehicle_id;
    }
    public void setVehicle_id(int vehicle_id) {
        this.vehicle_id = vehicle_id;
    }
    public String getVehicleName() {
        return vehicleName;
    }
    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }
    public String getVehicleNumber() {
        return vehicleNumber;
    }
    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getVehicleType() {
        return vehicleType;
    }
    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String locationCountry) {
        this.country = locationCountry;
    }
    public String getState() {
        return state;
    }
    public void setState(String locationState) {
        this.state = locationState;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String locationCity) {
        this.city = locationCity;
    }
    public Integer getSeatingCapacity() {
        return seatingCapacity;
    }
    public void setSeatingCapacity(Integer seatingCapacity) {
        this.seatingCapacity = seatingCapacity;
    }
    public String getFuelType() {
        return fuelType;
    }
    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
    public String getTransmission() {
        return transmission;
    }
    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }
    public Integer getNumOfWheels() {
        return numOfWheels;
    }
    public void setNumOfWheels(Integer numOfWheels) {
        this.numOfWheels = numOfWheels;
    }
    public Double getRentPrice() {
        return rentPrice;
    }
    public void setRentPrice(Double rentPrice) {
        this.rentPrice = rentPrice;
    }
    public String getAdditionalInfo() {
        return additionalInfo;
    }
    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
    public boolean isBooked() {
        return isBooked;
    }
    public void setBooked(boolean isBooked) {
        this.isBooked = isBooked;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    @Override
    public String toString() {
        return "Vehicle [vehicle_id=" + vehicle_id + ", vehicleName=" + vehicleName + ", vehicleNumber=" + vehicleNumber
                + ", category=" + category + ", vehicleType=" + vehicleType + ", locationCountry=" + country
                + ", locationState=" + state + ", locationCity=" + city + ", seatingCapacity="
                + seatingCapacity + ", fuelType=" + fuelType + ", transmission=" + transmission + ", numOfWheels="
                + numOfWheels + ", rentPrice=" + rentPrice + ", additionalInfo=" + additionalInfo + ", isBooked="
                + isBooked + ", imageUrl=" + imageUrl + "]";
    }
    


}
