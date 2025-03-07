package com.userdata.VehicleType.PassengerVehicle.PassengerRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.PassengerVehicle.car;

@Repository
public interface CarRepository extends JpaRepository<car, Integer> {

     @Query(value = "select * from car where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<car> findCarByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city);
     
}


