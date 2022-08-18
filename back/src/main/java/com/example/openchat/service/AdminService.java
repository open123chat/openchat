package com.example.openchat.service;

import com.example.openchat.repository.AdminRepository;
import com.example.openchat.vo.UserInfoVo;
import com.example.openchat.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    // 유저 리스트 (삭제 유저 미포함)
    public Map userList(){
        Map<Object,Object> userList = new HashMap<>();

        //관리자 리스트
        List<UserInfoVo> adminListEntity = adminRepository.adminList();

        //유저 리스트
        List<UserInfoVo> userListEntity = adminRepository.userList();

        userList.put("admin",adminListEntity);
        userList.put("user",userListEntity);

        System.out.println("유저 리스트 : "+userList);
        return userList;
    }

    //유저 권한 수정
    public int roleUpdate(Long userNo, UserVo userVo){
        userVo.setUserNo(userNo);
        return adminRepository.roleUpdate(userVo);
    }
}
