package com.example.openchat.filter;

import javax.servlet.*;
import java.io.IOException;

public class MyFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("필터 테스트1");
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
