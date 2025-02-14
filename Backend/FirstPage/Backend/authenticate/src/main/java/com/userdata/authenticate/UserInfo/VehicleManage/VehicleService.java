package com.userdata.authenticate.UserInfo.VehicleManage;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository ;

    public void saveVehicle(Vehicle v)
    {
        vehicleRepository.save(v);
    }

    public List<Vehicle> findVehicleByLocation(String country, String state, String city)
    {
        return vehicleRepository.findByCountryAndStateAndCity(country, state, city);
    }
   

}







