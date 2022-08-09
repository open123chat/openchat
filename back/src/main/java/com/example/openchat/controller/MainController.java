package com.example.openchat.controller;

import com.example.openchat.service.RedisSampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    private RedisSampleService redisSampleService;

//    @GetMapping("/")
//    public ResponseEntity main() {
//
//        return new ResponseEntity<>(1, HttpStatus.OK);
//    }

    //get
    @PostMapping(value = "/getRedis")
    public void getRedisStringValue(String key){
        System.out.println(key);
        redisSampleService.getRedisStringValue(key);
    }

    //set
    @PostMapping(value = "/setRedis")
    public void setRedisStringValue(String key, String value){
        System.out.println(key);
        System.out.println(value);
        redisSampleService.setRedisStringValue(key, value);
    }
    //test

    //시큐리티 로그인 테스트
    @GetMapping("/home")
    public String home(){
        return "<h1> HOME </h1>";
    }
}
