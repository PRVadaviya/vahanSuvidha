package com.userdata.VehicleType.ConstructionVehicle.ConstructionService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.ConstructionVehicle.Bulldozer;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository.BulldozerRepository;

@Service
public class BulldozerService {
     
     @Autowired
     private BulldozerRepository bulldozerRepository ;

     public List<Bulldozer> findBulldozers(String country , String state , String city , int pvid)
     {
          return bulldozerRepository.findBulldozerByCountryStateCity(country, state, city, pvid);
     }

     public Bulldozer findBulldozerById(int id)
     {
          return bulldozerRepository.findById(id).get();
     }

     public List<Bulldozer> findAllBulldozers(){

          return bulldozerRepository.findAll() ;
     }
     
}
