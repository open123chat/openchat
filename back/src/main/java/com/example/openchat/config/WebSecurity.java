//package com.example.openchat.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurity extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////        http
////                .csrf().disable()
////                .authorizeHttpRequests()
////                .mvcMatchers(HttpMethod.OPTIONS,"/**").permitAll()
////                .antMatchers("/chat/api/**").authenticated()
////                .and()
////                .formLogin()
////                //login 주소가 호출 되면 시큐리티가 낚아채서 대신 로그인을 진행해 준다. --> 로그인 Controller를 만들 필요가 업어진다
////                .loginProcessingUrl("/api/user/login")
////                //login이 완료되면 호출되는 url
////
////
////        ;
////    }
//}
