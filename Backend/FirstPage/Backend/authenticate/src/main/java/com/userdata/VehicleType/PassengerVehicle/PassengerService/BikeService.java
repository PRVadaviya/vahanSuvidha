package com.userdata.VehicleType.PassengerVehicle.PassengerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.PassengerVehicle.bike;
import com.userdata.VehicleType.PassengerVehicle.PassengerRepository.BikeRepository;

@Service
public class BikeService {
     
     @Autowired
     private BikeRepository bikeRepository ;

     public List<bike> findBikes(String country , String state , String city)
     {
          return bikeRepository.findBikeByCountryStateCity(country, state, city);
     }

     public bike findBikeById(int id)
     {
          return bikeRepository.findById(id).get();
     }

     public List<bike> findAllBikes()
     {
          return bikeRepository.findAll();
     }
}
