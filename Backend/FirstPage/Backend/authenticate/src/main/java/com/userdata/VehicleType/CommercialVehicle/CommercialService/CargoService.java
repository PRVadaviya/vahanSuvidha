package com.userdata.VehicleType.CommercialVehicle.CommercialService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.CommercialVehicle.Cargo;
import com.userdata.VehicleType.CommercialVehicle.CommercialRepository.CargoRepository;

@Service
public class CargoService {

     @Autowired
     private CargoRepository cargoRepository;

     public List<Cargo> findCargos(String country , String state , String city , int pvid)
     {
          return cargoRepository.findCargoByCountryStateCity(country, state, city, pvid);
     }
     
     public Cargo findCargoById(int id)
     {
          return cargoRepository.findById(id).get();
     }

     public List<Cargo> findAllCargos(){

          return cargoRepository.findAll() ;
     }
}
