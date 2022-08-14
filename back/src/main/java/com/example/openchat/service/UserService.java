package com.example.openchat.service;

import com.example.openchat.repository.UserRepository;
import com.example.openchat.vo.UserVo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

//    public UserVo findByIdAndPasswordUser(){
//        return userRepository.findByIdAndPasswordUser();
//    }
    //회원가입
    public int JoinUser(UserVo userVo){
        userVo.setRoles("ROLE_USER");
        userVo.setState("T");
        return userRepository.JoinUser(userVo);
    }

    //Amdin회원가입
    public int JoinAdminUser(UserVo userVo){

        return userRepository.JoinAdminUser(userVo);
    }

    //유저 정보
    public UserVo userInfo(Long userNo) {
        UserVo userEntity = userRepository.userInfo(userNo);
        System.out.println("유저 정보 : " + userEntity);
        return userEntity;
    }
}
