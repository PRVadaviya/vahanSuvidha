package com.userdata.VehicleType.CommercialVehicle.CommercialRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.CommercialVehicle.Truck;

@Repository
public interface TruckRepository extends JpaRepository<Truck, Integer> {
     
     @Query(value = "select * from tractor where location_country = :country AND location_state = :state AND location_city = :city AND commercial_vehicle_id = :pvid" , nativeQuery = true)
     List<Truck> findTruckByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city , @Param("pvid") int pvid);
     
}
