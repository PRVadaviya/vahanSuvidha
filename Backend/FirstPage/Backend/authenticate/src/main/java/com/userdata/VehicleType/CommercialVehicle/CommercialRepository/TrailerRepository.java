package com.userdata.VehicleType.CommercialVehicle.CommercialRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.CommercialVehicle.Trailer;

@Repository
public interface TrailerRepository extends JpaRepository<Trailer, Integer> {
     
     @Query(value = "select * from trailer where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<Trailer> findTrailerByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city );
     
}
