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

     public List<Truck> findTrucks(String country , String state , String city)
     {
          return truckRepository.findTruckByCountryStateCity(country, state, city);
     }

     public Truck findTruckById(int id)
     {
          return truckRepository.findById(id).get();
     }

     public List<Truck> findAllTrucks(){

          return truckRepository.findAll() ;
     }
}
