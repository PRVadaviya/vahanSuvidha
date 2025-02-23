package com.userdata.Location;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationService {
       
     @Autowired
     private LocationCountryRepository locationCountryRepository ;

     @Autowired
     private LocationStateRepository locationStateRepository ;

     List<Country> getStateByCountryId(int id)
     {
          Optional<State> st = this.locationStateRepository.findById(id);
          
          List<Country> s = this.locationCountryRepository.findAll();
          return s ;

          //return  st.stream().collect(Collectors.toList()) ;
     }


    
}
