package com.userdata.VehicleType.AgricultureVehicle.AgricultureService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.AgricultureVehicle.Tractor;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository.TractorRepository;

@Service
public class TractorService {
     
     @Autowired
     private TractorRepository tractorRepository ;

     public List<Tractor> findTractors(String country , String state , String city)
     {
          return tractorRepository.findTractorByCountryStateCity(country, state, city);
     }

     public Tractor findTractorById(int id)
     {
          return tractorRepository.findById(id).get();
     }

     public List<Tractor> findAllTractors()
     {
          return tractorRepository.findAll() ;
     }
}
