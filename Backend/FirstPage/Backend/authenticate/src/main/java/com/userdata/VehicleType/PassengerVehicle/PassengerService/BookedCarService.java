package com.userdata.VehicleType.PassengerVehicle.PassengerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userdata.Searching.bookedCar;
import com.userdata.VehicleType.PassengerVehicle.PassengerRepository.BookedCarRepository;

@Service
public class BookedCarService {
     
     @Autowired
     private BookedCarRepository bookedCarRepository ;

     public void saveVehicle(bookedCar bc)
     {
          bookedCarRepository.save(bc);
     }
}
