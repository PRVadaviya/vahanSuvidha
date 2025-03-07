package com.userdata.VehicleType.AgricultureVehicle.AgricultureService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.AgricultureVehicle.Harvester;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository.HarvesterRepository;


@Service
public class HarvesterService {

     @Autowired
     private HarvesterRepository harvesterRepository;

     public List<Harvester> findHarvesters(String country , String state , String city , int pvid)
     {
          return harvesterRepository.findHarvesterByCountryStateCity(country, state, city, pvid);
     }

     public Harvester findHarvesterById(int id)
     {
          return harvesterRepository.findById(id).get();
     }

     public List<Harvester> findAllHarvesters()
     {
          return harvesterRepository.findAll() ;
     }
     
}
