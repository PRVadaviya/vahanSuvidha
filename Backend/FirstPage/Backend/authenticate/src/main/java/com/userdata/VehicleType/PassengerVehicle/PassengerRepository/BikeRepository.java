package com.userdata.VehicleType.PassengerVehicle.PassengerRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.PassengerVehicle.bike;

@Repository
public interface BikeRepository extends JpaRepository<bike, Integer> {

     @Query(value = "select * from bike where location_country = :country AND location_state = :state AND location_city = :city AND passenger_vehicle_id = :pvid" , nativeQuery = true)
     List<bike> findBikeByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city , @Param("pvid") int pvid);
     
}
