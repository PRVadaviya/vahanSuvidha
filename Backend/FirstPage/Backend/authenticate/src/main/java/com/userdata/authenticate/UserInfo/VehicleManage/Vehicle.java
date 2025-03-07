package com.userdata.authenticate.UserInfo.VehicleManage;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicle")
public class Vehicle {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleName;
    private String vehicleNumber;
    private String category;
    private String type;
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
    // Getters and Setters

    public boolean isBooked() {
        return isBooked;
    }

    public void setBooked(boolean isBooked) {
        this.isBooked = isBooked;
    }

    public Long getVehicleId() {
        return id;
    }

    public void setVehicleId(Long id) {
        this.id = id;
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
    
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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

    @Override
    public String toString() {
        return "Vehicle [id=" + id + ", vehicleName=" + vehicleName + ", vehicleNumber=" + vehicleNumber + ", category="
                + category + ", type=" + type + ", country=" + country + ", state=" + state + ", city=" + city
                + ", seatingCapacity=" + seatingCapacity + ", fuelType=" + fuelType + ", transmission=" + transmission
                + ", numOfWheels=" + numOfWheels + ", rentPrice=" + rentPrice + ", additionalInfo=" + additionalInfo
                + ", isBooked=" + isBooked + "]";
    }

    
}
