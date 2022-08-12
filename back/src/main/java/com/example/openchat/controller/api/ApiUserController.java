package com.example.openchat.controller.api;

import com.example.openchat.service.UserService;
import com.example.openchat.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
//@CrossOrigin({"http://localhost:3000"})
public class ApiUserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //회원가입
    @PostMapping("/join")
    public ResponseEntity UserJoin(@RequestBody UserVo userVo){
        System.out.println("때려짐??");
        System.out.println("받은 유저 정보 : "+userVo);
        //비밀번호 암호화
        String beforePassword = userVo.getPassword();
        String afterPassword = passwordEncoder.encode(beforePassword);
        userVo.setPassword(afterPassword);
        System.out.println("user 권한 : "+userVo.getRoles());

        if(userVo.getRoles() == null ||!userVo.getRoles().equals("ROLE_ADMIN") ){
            //일반 사용자 서비스
            System.out.println("일반 사용자 등록 Controller");
            return new ResponseEntity<>(userService.JoinUser(userVo), HttpStatus.CREATED); //201
        }else{
            //관리자 등록 서비스
            System.out.println("관리자 등록 Controller");
            return new ResponseEntity<>(userService.JoinAdminUser(userVo), HttpStatus.CREATED);//201
        }

    }
//    //user,admin권한만 접근가능
//    @GetMapping("/info/user")
//    public String infoUser(){
//
//        return "user";
//    }
//
//    //admin권한만 접근가능
//    @GetMapping("/info/admin")
//    public String infoAdmin(){
//
//        return "admin";
//    }
}
