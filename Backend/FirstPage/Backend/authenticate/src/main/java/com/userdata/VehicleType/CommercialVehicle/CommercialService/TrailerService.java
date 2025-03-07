package com.userdata.VehicleType.CommercialVehicle.CommercialService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.CommercialVehicle.Trailer;
import com.userdata.VehicleType.CommercialVehicle.CommercialRepository.TrailerRepository;

@Service
public class TrailerService {
     
     @Autowired
     private TrailerRepository trailerRepository;

     public List<Trailer> findTrailers(String country , String state , String city , int pvid)
     {
          return trailerRepository.findTrailerByCountryStateCity(country, state, city, pvid);
     }

     public Trailer findTrailerById(int id)
     {
          return trailerRepository.findById(id).get();
     }

     public List<Trailer> findAllTrailers(){

          return trailerRepository.findAll() ;
     }
}
