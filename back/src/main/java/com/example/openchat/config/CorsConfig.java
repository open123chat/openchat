package com.example.openchat.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); //내 서버가 응답할 때 json을 자바스크립트에서 처리할 수 있게 할지 설정 = true
        config.addAllowedOriginPattern("*"); //모든 ip 응답을 허용하겠다.
        config.addAllowedHeader("*"); //모든 header 응답을 허용하겠다.
        config.addAllowedMethod("*"); // post, get, put, delete 요청을 허용하겠다.
        config.addExposedHeader("Authorization");
//        config.setExposedHeaders("");
        Map<String, CorsConfiguration> corsConfigurations= new HashMap<>();
        corsConfigurations.put("/api/**", config);
        corsConfigurations.put("/login", config);

        source.setCorsConfigurations(corsConfigurations);
//        source.registerCorsConfiguration("/api/**",config);
        return new CorsFilter(source);
    }
}
