package com.userdata.authenticate.UserInfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan(basePackages = {"com.userdata.authenticate.UserInfo"  ,  "com.userdata.authenticate.CheckData" , "com.userdata.authenticate.SendOtp" , "com.userdata.VehicleType" })
@EnableJpaRepositories(basePackages = {"com.userdata.VehicleType.PassengerVehicle.PassengerRepository" ,"com.userdata.VehicleType.AgricultureVehicle.AgricultureRepository" ,"com.userdata.VehicleType.CommercialVehicle.CommercialRepository","com.userdata.VehicleType.ConstructionVehicle.ConstructionRepository", "com.userdata.authenticate.UserInfo"})
@EntityScan(basePackages = {"com.userdata.VehicleType.PassengerVehicle" , "com.userdata.VehicleType.AgricultureVehicle" ,"com.userdata.VehicleType.CommercialVehicle" ,"com.userdata.VehicleType.ConstructionVehicle" , "com.userdata.Location" , "com.userdata.authenticate.UserInfo" , "com.userdata.Searching"})
public class AuthenticateApplication {

	public static void main(String[] args){
		SpringApplication.run(AuthenticateApplication.class, args);
	}
}


