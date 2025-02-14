package com.userdata.authenticate.UserInfo.VehicleManage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

     @Query("select u from Vehicle u where u.country = :country and u.state = :state and u.city = :city")             
     public List<Vehicle> findByCountryAndStateAndCity(@Param("country") String country, @Param("state") String state, @Param("city") String city);

}