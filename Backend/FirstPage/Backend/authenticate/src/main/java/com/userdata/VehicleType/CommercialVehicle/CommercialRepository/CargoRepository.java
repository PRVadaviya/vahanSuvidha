package com.userdata.VehicleType.CommercialVehicle.CommercialRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.userdata.VehicleType.CommercialVehicle.Cargo;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Integer> {
     
     @Query(value = "select * from cargo where location_country = :country AND location_state = :state AND location_city = :city AND is_booked = false" , nativeQuery = true)
     List<Cargo> findCargoByCountryStateCity(@Param("country") String country, @Param("state")String state,@Param("city") String city );
     

}
