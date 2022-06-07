package com.example.openchat.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MyFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;

        if(req.getMethod().equals("POST")){
            System.out.println("POST요청");
            String headerAuth = req.getHeader("Authorization");
            System.out.println(headerAuth);
        }
        System.out.println("필터 테스트1");
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
