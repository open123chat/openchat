package com.example.openchat.controller.api;

import com.example.openchat.service.UserService;
import com.example.openchat.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    //간편 로그인
//    @GetMapping
//    public ResponseEntity findByIdAndPasswordUser(){
//        return new ResponseEntity<>(userService.findByIdAndPasswordUser(),HttpStatus.OK); //200
//    }

    //회원가입
    @PostMapping("/join")
    public ResponseEntity UserJoin(@RequestBody UserVo userVo){
        System.out.println("때려짐??");
        System.out.println("받은 유저 정보 : "+userVo);
        //비밀번호 암호화
        String beforePassword = userVo.getPassword();
        String afterPassword = passwordEncoder.encode(beforePassword);
        userVo.setPassword(afterPassword);
        userVo.setRoles("ROLE_USER");
        return new ResponseEntity<>(userService.JoinUser(userVo), HttpStatus.CREATED); //201
    }

    //user,admin권한만 접근가능
    @GetMapping("/info/user")
    public String infoUser(){
        return "user";
    }

    //admin권한만 접근가능
    @GetMapping("/info/admin")
    public String infoAdmin(){

        return "admin";
    }
}
