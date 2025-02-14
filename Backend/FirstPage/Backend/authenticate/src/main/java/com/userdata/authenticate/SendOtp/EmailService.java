package com.userdata.authenticate.SendOtp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

     @Autowired
     private JavaMailSender mailSender;

     public boolean sendEmail(String message , String to){

          try {

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            //create mail
            mailMessage.setFrom("hifibhai2@gmail.com");
            mailMessage.setTo(to);
            mailMessage.setSubject("Otp Varifaction");
            mailMessage.setText(message);

            mailSender.send(mailMessage);
            return true;

          } catch (Exception e) {
               return false;
          }
     }
}