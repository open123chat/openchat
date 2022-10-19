package com.example.openchat.config.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.openchat.config.auth.PrincipalDetails;
import com.example.openchat.vo.UserVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

//스프링 시큐리티에서 /login 요청을해서 username,password를 전송하면 UsernamePasswordAuthenticationFilter 동장
//설정에서 formlogin을 disable시켰기 때문에 동작을 하지않음
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    // /login 요청을 하면 로그인 시도를 위해서 실행되는 함수
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        System.out.println("JWT Filter : 로그인 시도중");
        //1. username, password 받아서
        try {
            //json 데이터로 파싱하기
            ObjectMapper om = new ObjectMapper();
            UserVo user = om.readValue(request.getInputStream(),UserVo.class);
            System.out.println("요청온 유저 정보 : "+user);

            //토큰 생성
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword());
            //PrincipalDetailsService의 loadUserByUsername 실행됨
            Authentication authentication = authenticationManager.authenticate(authenticationToken);


            PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
            System.out.println("principal 유저 : "+principalDetails.getUser().getUsername());
            System.out.println(principalDetails.getUser().getUsername());
            System.out.println("principal 유저 권한 : " + principalDetails.getUser().getRoles());
            System.out.println("*********************************************");
            //authentication 객체가 session 영역에 저장하고 return
            //리턴 이유는 권한 관리를 security가 대신 해주기때문에 편하기 위해서
            //JWT토큰을 사용하면 세션을 만들 필요없지만 권한 처리를 위해 생성하였다.

            return  authentication;
        } catch (IOException e) {
            e.printStackTrace();
        }
        //2. 정상인지 로그인 시도 --> authenticationManager로 로그인 시도하면
        //   PrincipalDetaileService가 실행된다.(loadUserByUsername)

        //3. PrincipalDetails를 세션에 담고(권한 관리를 위해서)

        //4. JWT토큰을 만들어서 응답해주면된다.
        System.out.println("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        return null;
    }

    // attemptAuthentication 실행 후 = 인증이 정상적으로 되었으면
    //successfulAuthentication 실행 --> JWT토큰 만들어서 request 요청한 사용자에게 JWT토큰을 response
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        System.out.println("sucessfulAuthentication실행 됨 = 인증완료");

        //authentication 객체가 session 영역에 저장된다.
        // = 로그인이 되었습니다~
        PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();

        //JWT 토큰 생성하기
        String jwtToken = JWT.create()
                .withSubject("사용자 토큰")
                        .withExpiresAt(new Date(System.currentTimeMillis()+(60000 * 100))) //토큰 만료 시간 (현재시간 + 10분)
                        .withClaim("id",principalDetails.getUser().getUserNo())
                        .withClaim("username",principalDetails.getUser().getUsername())
                        .withClaim("role", principalDetails.getUser().getRoles())
                        .withClaim("userNickName", principalDetails.getUser().getUserNickName())
                                        .sign(Algorithm.HMAC512("cos"));
        System.out.println("JWT 토큰 생성완료 : "+ jwtToken);
        response.addHeader("Authorization","Bearer "+jwtToken); //응답해줄 때 header에 담을 data(jwt토큰)

    }
}
