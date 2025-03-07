package com.userdata.VehicleType.CommercialVehicle.CommercialRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.CommercialVehicle.CommercialVehicle;

@Repository
public interface CommercialVehicleRepository extends JpaRepository<CommercialVehicle , Integer> {
     
}
