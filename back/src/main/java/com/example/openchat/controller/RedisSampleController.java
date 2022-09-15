//package com.example.openchat.controller;
//
//import com.example.openchat.service.RedisSampleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class RedisSampleController {
//
//    @Autowired
//    private RedisSampleService redisSampleService;
//
//    //get
//    @PostMapping(value = "/getRedis")
//    public void getRedisStringValue(String key){
//        System.out.println(key);
//        redisSampleService.getRedisStringValue(key);
//    }
//
//    //set
//    @PostMapping(value = "/setRedis")
//    public void setRedisStringValue(String key,String value){
//        System.out.println(key+value);
//        redisSampleService.setRedisStringValue(key, value);
//    }
//}
