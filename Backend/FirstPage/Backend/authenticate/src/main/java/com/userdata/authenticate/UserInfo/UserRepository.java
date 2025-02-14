package com.userdata.authenticate.UserInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>
{
     //metch this- :email identifier match with param parameter 
                                        
     @Query("select u from User u where u.email = :email")             
     public User getUserByEmail(@Param("email") String email);

     @Query(value = "UPDATE user_info SET password = :newPassword , confirm_password = :confirm_password WHERE email = :email", nativeQuery = true)
     public int updateUserPassword(@Param("email") String email, @Param("newPassword") String newPassword , @Param("confirm_password") String confirm_password);
}
