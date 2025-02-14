// package com.userdata.authenticate.CheckData;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecondConfig {
     
//      @Bean
//      public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
//      {
//           http
//             .csrf().disable() // Disable CSRF for testing purposes (optional, not recommended in production)
//             .authorizeHttpRequests(auth -> auth
//                 .requestMatchers("/**").permitAll() // Allow public paths
//                 .anyRequest().authenticated() // Require authentication for other paths
//             )
//             .formLogin(form -> form
//                 .loginPage("/login-form") // Custom login page
//                 .permitAll()
//             )
//             .httpBasic(); // Enable HTTP Basic authentication

//         return http.build();
//      }
// }


package com.userdata.authenticate.CheckData;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class SecondConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disable CSRF for testing purposes (optional, not recommended in production)
            .cors() // Enable CORS
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/**").permitAll() // Allow public paths
                .anyRequest().authenticated() // Require authentication for other paths
            )
            .formLogin(form -> form
                .loginPage("/login-form") // Custom login page
                .permitAll()
            )
            .httpBasic(); // Enable HTTP Basic authentication

        return http.build();
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:5173"); // Allow the React app's origin
        configuration.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, etc.)
        configuration.addAllowedHeader("*"); // Allow all headers
        configuration.setAllowCredentials(true); // Allow credentials like cookies or authorization headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Apply CORS to all endpoints
        return new CorsFilter(source);
    }
}
