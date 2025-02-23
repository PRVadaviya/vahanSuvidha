package com.userdata.VehicleType.PassengerVehicle.PassengerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.VehicleType.PassengerVehicle.PassengerVehicle;
import com.userdata.VehicleType.PassengerVehicle.PassengerRepository.PassengerVehicleRepository;

@Service
public class PassengerVehicleService {
     
    @Autowired
    private PassengerVehicleRepository passengerVehicleRepository;

    public void saveVehicle(PassengerVehicle v)
    {
        passengerVehicleRepository.save(v);
    }

}
