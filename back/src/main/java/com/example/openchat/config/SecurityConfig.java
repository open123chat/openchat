package com.example.openchat.config;

import com.example.openchat.config.jwt.JwtAuthenticationFilter;
import com.example.openchat.config.jwt.JwtAuthorizationFilter;
import com.example.openchat.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
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
    private  final UserRepository userRepository;
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.addFilterBefore(new MyFilter(), BasicAuthenticationFilter.class);
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

                .addFilter(new JwtAuthenticationFilter(authenticationManager())) //AuthenticationManger파라매터를 넘겨줘야함 어댑터가 들고있음
                .addFilter(new JwtAuthorizationFilter(authenticationManager(),userRepository))

                .authorizeRequests()
                .antMatchers("/api/user/info/user").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
                .antMatchers("/api/user/info/admin").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/api/community/write").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers("/api/community/mylist/*").access("hasRole('ROLE_USER')")
                .antMatchers(HttpMethod.POST,"/api/community/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.DELETE,"/api/community/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.PUT,"/api/community/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.POST,"/api/reply/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.DELETE,"/api/reply/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') ")
                .antMatchers(HttpMethod.PUT,"/api/reply/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.POST,"/api/notice/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.DELETE,"/api/notice/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                .antMatchers(HttpMethod.PUT,"/api/notice/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                .antMatchers("/api/admin/*").access("hasRole('ROLE_ADMIN')")
//                .antMatchers("/api/user/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
//                .antMatchers("/api/chat/*").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
                .anyRequest().permitAll();

    }
}
