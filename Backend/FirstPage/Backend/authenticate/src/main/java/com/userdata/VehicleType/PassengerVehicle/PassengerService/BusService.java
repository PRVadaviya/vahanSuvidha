package com.userdata.VehicleType.PassengerVehicle.PassengerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.PassengerVehicle.bus;
import com.userdata.VehicleType.PassengerVehicle.PassengerRepository.BusRepository;

@Service
public class BusService {

     @Autowired
     private BusRepository busRepository;

     public List<bus> findBuss(String country , String state , String city)
     {
          return busRepository.findBusByCountryStateCity(country, state, city);
     }

     public bus findBusById(int id)
     {
          return busRepository.findById(id).get();
     }

     public List<bus> findAllBuss()
     {
          return busRepository.findAll();
     }

}
