package com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.ConstructionVehicle.ConstructionVehicle;

@Repository
public interface ConstructionVehicleRepository extends JpaRepository<ConstructionVehicle,Integer>{
     
}
