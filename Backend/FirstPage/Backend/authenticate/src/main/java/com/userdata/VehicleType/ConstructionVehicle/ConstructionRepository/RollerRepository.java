package com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.userdata.VehicleType.ConstructionVehicle.Roller;

public interface RollerRepository extends JpaRepository<Roller,Integer>{
     
     @Query(value = "select * from roller where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<Roller> findRollerByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city );
     
}
