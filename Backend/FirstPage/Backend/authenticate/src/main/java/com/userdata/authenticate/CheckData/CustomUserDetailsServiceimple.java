package com.userdata.authenticate.CheckData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.userdata.authenticate.UserInfo.User;
import com.userdata.authenticate.UserInfo.UserRepository;

public class CustomUserDetailsServiceimple implements UserDetailsService {

     @Autowired
     private UserRepository userRepository ;

     @Override
     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
         
          User u1 = userRepository.getUserByEmail(username);

          if(u1 == null)
          {
               throw new UsernameNotFoundException("Could not found user !!");
          }

          CustomUserDetails customUserDetails = new CustomUserDetails(u1);
          return customUserDetails ;
     }

     
}