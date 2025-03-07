package com.userdata.VehicleType.CommercialVehicle;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Truck {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column(name = "vehicle_id")
     private int vehicle_id;

     @ManyToOne
     @JoinColumn(name = "commercialVehicleId")
     @JsonBackReference
     private CommercialVehicle commercialVehicle;

     private String VehicleName;
     private String VehicleNumber;
     private String VehicleType;

     private String locationCity;
     private String locationState;
     private String locationCountry;

     private Integer seatingCapacity;
     private String fuelType;
     private String transmission;
     private Integer numOfWheels;
     private double VehicleRentPrice;
     private String VehicleAdditionalInfo;
     private boolean isBooked;
     
     public int getVehicle_id() {
          return vehicle_id;
     }
     public void setVehicle_id(int carId) {
          this.vehicle_id = carId;
     }
     public CommercialVehicle getCommercialVehicle() {
          return commercialVehicle;
     }
     public void setCommercialVehicle(CommercialVehicle commercialVehicle) {
          this.commercialVehicle = commercialVehicle;
     }
     public String getVehicleName() {
          return VehicleName;
     }
     public void setVehicleName(String vehicleName) {
          VehicleName = vehicleName;
     }
     public String getVehicleNumber() {
          return VehicleNumber;
     }
     public void setVehicleNumber(String vehicleNumber) {
          VehicleNumber = vehicleNumber;
     }
     public String getVehicleType() {
          return VehicleType;
     }
     public void setVehicleType(String vehicleType) {
          VehicleType = vehicleType;
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
     public double getVehicleRentPrice() {
          return VehicleRentPrice;
     }
     public void setVehicleRentPrice(double vehicleRentPrice) {
          VehicleRentPrice = vehicleRentPrice;
     }
     public String getVehicleAdditionalInfo() {
          return VehicleAdditionalInfo;
     }
     public void setVehicleAdditionalInfo(String vehicleAdditionalInfo) {
          VehicleAdditionalInfo = vehicleAdditionalInfo;
     }
     public boolean isBooked() {
          return isBooked;
     }
     public void setBooked(boolean isBooked) {
          this.isBooked = isBooked;
     }

}