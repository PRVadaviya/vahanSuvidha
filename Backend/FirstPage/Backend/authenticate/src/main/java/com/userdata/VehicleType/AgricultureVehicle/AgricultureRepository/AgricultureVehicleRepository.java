package com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.AgricultureVehicle.AgricultureVehicle;

@Repository
public interface AgricultureVehicleRepository extends JpaRepository<AgricultureVehicle, Integer> {
     
}
