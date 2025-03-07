package com.userdata.VehicleType.ConstructionVehicle.ConstructionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.ConstructionVehicle.ConstructionVehicle;
import com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository.ConstructionVehicleRepository;

@Service
public class ConstructionVehicleService {
     
     @Autowired
     private ConstructionVehicleRepository constructionVehicleRepository ;

     public void saveVehicle(ConstructionVehicle v)
     {
         constructionVehicleRepository.save(v);
     }

}
