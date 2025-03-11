package com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.ConstructionVehicle.CementMixer;

@Repository
public interface CementMixerRepository extends JpaRepository<CementMixer,Integer> {

     @Query(value = "select * from CementMixer where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<CementMixer> findCementMixerByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city );
     
}
