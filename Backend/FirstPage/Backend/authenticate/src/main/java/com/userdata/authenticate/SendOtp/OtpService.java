package com.userdata.authenticate.SendOtp;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OtpService {

    private String otpCache;

    // Generate OTP
    public String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000); // 6-digit OTP
        otpCache = String.valueOf(otp);
        System.out.println("******************************************************************"+otpCache+"**********************************************************");
        return otpCache;
    }

   // Validate OTP
    public boolean validateOtp(String userInputOtp) {
     System.out.println("******************************************************************"+userInputOtp+"**********************************************************");
        return userInputOtp != null && otpCache != null && otpCache.equals(userInputOtp);
    }
}
