package com.userdata.VehicleType.PassengerVehicle.PassengerRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userdata.Searching.bookedCar;

@Repository
public interface BookedCarRepository extends JpaRepository<bookedCar, Integer> {
     
}
