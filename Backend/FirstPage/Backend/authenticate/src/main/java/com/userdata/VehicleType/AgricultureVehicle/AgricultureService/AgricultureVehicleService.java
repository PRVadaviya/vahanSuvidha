package com.userdata.VehicleType.AgricultureVehicle.AgricultureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.AgricultureVehicle.AgricultureVehicle;
import com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository.AgricultureVehicleRepository;

@Service
public class AgricultureVehicleService {
     
     @Autowired
     private AgricultureVehicleRepository agricultureVehicleRepository;

     public void saveVehicle(AgricultureVehicle v)
     {
        agricultureVehicleRepository.save(v);
     }
}
