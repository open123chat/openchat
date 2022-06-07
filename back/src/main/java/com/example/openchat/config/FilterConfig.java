package com.example.openchat.config;

import com.example.openchat.filter.MyFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
    //Request 요청이오면 Filter가 걸리게 설정
    //Test 결과 : 내가 생성한 Filter는 SecurityConfig필터 이후에 실행된다.
    @Bean
    public FilterRegistrationBean<MyFilter> filter1(){
        FilterRegistrationBean<MyFilter> bean = new FilterRegistrationBean<>(new MyFilter());
        bean.addUrlPatterns("/*");
        bean.setOrder(0);//가장 낮은 번호가 먼저 실행됨
        return bean;
    }
}
