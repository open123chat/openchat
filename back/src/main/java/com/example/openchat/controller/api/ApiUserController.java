package com.example.openchat.controller.api;

import com.example.openchat.service.UserService;
import com.example.openchat.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class ApiUserController {
    @Autowired
    private UserService userService;

    //유저 모든 정보
    @GetMapping
    public void FindByIdUser(){
        userService.FindByIdUser();
    }

    //유저 추가
    @CrossOrigin
    @PostMapping("/join")
    public ResponseEntity UserJoin(@RequestBody UserVo userVo){
        System.out.println("때려짐??");
        System.out.println("받은 유저 정보 : "+userVo);
        return new ResponseEntity<>(userService.JoinUser(userVo), HttpStatus.CREATED); //201
    }
}
