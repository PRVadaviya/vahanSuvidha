package com.userdata.VehicleType.CommercialVehicle.CommercialService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.CommercialVehicle.Truck;
import com.userdata.VehicleType.CommercialVehicle.CommercialRepository.TruckRepository;

@Service
public class TruckService {
     
     @Autowired
     private TruckRepository truckRepository;

     public List<Truck> findTrailers(String country , String state , String city , int pvid)
     {
          return truckRepository.findTruckByCountryStateCity(country, state, city, pvid);
     }

     public Truck findTruckById(int id)
     {
          return truckRepository.findById(id).get();
     }

     public List<Truck> findAllTrucks(){

          return truckRepository.findAll() ;
     }
}
