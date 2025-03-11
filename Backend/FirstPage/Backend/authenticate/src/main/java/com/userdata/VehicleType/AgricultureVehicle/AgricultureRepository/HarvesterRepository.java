package com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.AgricultureVehicle.Harvester;


@Repository
public interface HarvesterRepository extends JpaRepository<Harvester,Integer>{

     @Query(value = "select * from harvester where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<Harvester> findHarvesterByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city );
     
}
