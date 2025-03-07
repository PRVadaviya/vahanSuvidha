package com.userdata.VehicleType.PassengerVehicle.PassengerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.PassengerVehicle.car;
import com.userdata.VehicleType.PassengerVehicle.PassengerRepository.CarRepository;

@Service
public class CarService {

     @Autowired
     private CarRepository carRepository;

     public List<car> findCars(String country , String state , String city)
     {
          return carRepository.findCarByCountryStateCity(country, state, city);
     }

     public car findCarById(int id)
     {
          return carRepository.findById(id).get();
     }

     public List<car> findAllCars()
     {
          return carRepository.findAll();
     }

}
