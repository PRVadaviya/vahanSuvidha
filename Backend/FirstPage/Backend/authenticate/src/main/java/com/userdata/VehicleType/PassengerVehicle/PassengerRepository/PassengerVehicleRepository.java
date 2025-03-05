package com.userdata.VehicleType.PassengerVehicle.PassengerRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.PassengerVehicle.PassengerVehicle;

@Repository
public interface PassengerVehicleRepository extends JpaRepository<PassengerVehicle, Integer> {

     
}
