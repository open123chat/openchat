package com.example.openchat.config.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.openchat.config.auth.PrincipalDetails;
import com.example.openchat.repository.UserRepository;
import com.example.openchat.vo.UserVo;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//시큐리티가 Filter를 가지고 있는데 그 필터중에 BasicAuthenticationFilter를 가지고 있음
// 이 필터는 권한이나 인증이 필요한 특정 주소를 요청했을때 이 필터를 무조건 타게 되었고
// 만약 권한이나 인증이 필요한 주소가 아니라면 이 필터가 실행되지 않음
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

 private UserRepository userRepository;

 public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository){
    super(authenticationManager);
    this.userRepository = userRepository;
 }

 //인증이나 권한이 필요한 요청이 있을때 해당 메소드가 실행될 것 = header값을 확인해서 확인
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        super.doFilterInternal(request, response, chain);
        System.out.println("인증이나 권한이 필요한 주소 요청이 옴");

        String jwtHeader = request.getHeader("Authorization");
        System.out.println("서버에서 받은 jwtHeader : "+jwtHeader);

        //받은 JWT 토큰을 검증해서 정상적인 사용자인지 검증
        //header가 있는 사용자가 아니면
        if(jwtHeader ==null || !jwtHeader.startsWith("Bearer")){
            chain.doFilter(request,response);
            return ;
        }
        // 정상적인 사용자
        String jwtToKen = request.getHeader("Authorization").replace("Bearer ","");
        //username 가져오기
        String username = JWT.require(Algorithm.HMAC512("cos")).build().verify(jwtToKen).getClaim("username").asString();
        //서명이 정상
        if(username !=null){
            UserVo userEntity = userRepository.findByUserName(username);

            PrincipalDetails principalDetails = new PrincipalDetails(userEntity);
            //임의로 Authentication 객체 생성 - usernamePasswordAuthenticationToken - service 안타기 위해서
            //JWT 토큰 서명을 통해 정상이면 Authentication 객체 생성
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails,null);
            //강제로 시큐리티 세션에 접근하여 Authentication 객체를 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request,response);
        }
 }
}
