package com.userdata.VehicleType.ConstructionVehicle.ConstructionService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.ConstructionVehicle.Roller;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository.RollerRepository;

@Service
public class RollerService {
     
     @Autowired
     private RollerRepository rollerRepository ;

     public List<Roller> findRollers(String country , String state , String city , int pvid)
     {
          return rollerRepository.findRollerByCountryStateCity(country, state, city, pvid);
     }

     public Roller findRollerById(int id)
     {
          return rollerRepository.findById(id).get();
     }

     public List<Roller> findAllRollers(){

          return rollerRepository.findAll() ;
     }
}
