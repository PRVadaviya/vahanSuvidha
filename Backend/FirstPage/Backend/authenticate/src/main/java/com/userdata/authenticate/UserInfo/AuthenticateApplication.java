package com.userdata.authenticate.UserInfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"com.userdata.authenticate.UserInfo"  ,  "com.userdata.authenticate.CheckData" , "com.userdata.authenticate.SendOtp" })
public class AuthenticateApplication {

	public static void main(String[] args){
		SpringApplication.run(AuthenticateApplication.class, args);
	}
}


