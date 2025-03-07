package com.userdata.VehicleType.ConstructionVehicle.ConstructionService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.ConstructionVehicle.CementMixer;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository.CementMixerRepository;

@Service
public class CementMixerService {
     
     @Autowired
     private CementMixerRepository cementMixerRepository ;

     public List<CementMixer> findCementMixers(String country , String state , String city , int pvid)
     {
          return cementMixerRepository.findCementMixerByCountryStateCity(country, state, city, pvid);
     }

     public CementMixer findCementMixerById(int id)
     {
          return cementMixerRepository.findById(id).get();
     }

     public List<CementMixer> findAllCementMixers(){

          return cementMixerRepository.findAll() ;
     }
}
