package com.userdata.VehicleType.CommercialVehicle.CommercialService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.CommercialVehicle.CommercialVehicle;
import com.userdata.VehicleType.CommercialVehicle.CommercialRepository.CommercialVehicleRepository;

@Service
public class CommercialVehicleService {
     
     @Autowired
     private CommercialVehicleRepository commercialVehicleRepository ;

     public void saveVehicle(CommercialVehicle v)
     {
         commercialVehicleRepository.save(v);
     }
}
