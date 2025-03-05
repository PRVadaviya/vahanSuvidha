package com.userdata.authenticate.UserInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>
{
     //metch this- :email identifier match with param parameter 
                                        
     @Query("select u from User u where u.email = :email")             
     public User getUserByEmail(@Param("email") String email);

     @Modifying
     @Transactional
     @Query(value = "UPDATE User u SET u.password = :password , u.confirm_password = :confirm_password WHERE u.email = :email")
     public int updateUserPassword(@Param("email") String email, @Param("password") String password , @Param("confirm_password") String confirm_password);
}
