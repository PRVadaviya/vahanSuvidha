package com.userdata.authenticate.UserInfo;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "user_info")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "User name cannot be empty!")
    @Size(min = 1, max = 20, message = "Name must be between 1 and 20 characters.")
    private String name;

    @NotBlank(message = "Mobile number cannot be empty!")
    private Long mobile_no;

    @NotBlank(message = "Email cannot be empty!")
    @Email(message = "Invalid email format!")
    private String email;

    @NotBlank(message = "Password cannot be empty!")
    private String password;

    @NotBlank(message = "Confirm Password cannot be empty!")
    private String confirm_password;

    // Default constructor
    public User() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(Long mobile_no) {
        this.mobile_no = mobile_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm_password() {
        return confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", mobile_no=" + mobile_no +
               ", email=" + email + ", password=" + password +
               ", confirm_password=" + confirm_password + "]";
    }
}
