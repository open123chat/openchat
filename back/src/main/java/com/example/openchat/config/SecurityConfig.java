package com.example.openchat.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CorsFilter corsFilter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        //세션을 사용하지 않고 stateless 방식 사용하겠다
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                //모든 요청시 cors필터를 걸치게 됨.
                //@CrossOrigin은 인증이 필요없을 경우 사용
                // 시큐리티 필터에 인증 필요
                .addFilter(corsFilter)
                .formLogin().disable()
                .httpBasic().disable()
                .authorizeRequests()
                .antMatchers("/api/user/**").access("hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll();

    }
}
