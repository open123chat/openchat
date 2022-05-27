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

    public UserVo findByIdAndPasswordUser(){
        return userRepository.findByIdAndPasswordUser();
    }
    public int JoinUser(UserVo userVo){
        return userRepository.JoinUser(userVo);
    }
}
