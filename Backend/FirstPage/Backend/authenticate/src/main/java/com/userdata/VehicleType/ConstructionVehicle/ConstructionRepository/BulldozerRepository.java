package com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.ConstructionVehicle.Bulldozer;

@Repository
public interface BulldozerRepository extends JpaRepository<Bulldozer,Integer>{
     
     @Query(value = "select * from bulldozer where location_country = :country AND location_state = :state AND location_city = :city AND construction_vehicle_id = :pvid" , nativeQuery = true)
     List<Bulldozer> findBulldozerByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city , @Param("pvid") int pvid);
     
}
