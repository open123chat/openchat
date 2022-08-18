package com.example.openchat.controller.api;

import com.example.openchat.service.AdminService;
import com.example.openchat.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/admin")
public class ApiAdminController {

    @Autowired
    private AdminService adminService;

    // 유저 리스트 (삭제 유저 미포함)
    @GetMapping("/userList")
    public ResponseEntity userList(){
        System.out.println("(관리자)유저 리스트 Controllor 요청");
        return new ResponseEntity<>(adminService.userList(), HttpStatus.OK);
    }

    // 유저 권한 수정
    @PutMapping("/user/{userNo}")
    public ResponseEntity roleUpdate(@PathVariable Long userNo, @RequestBody UserVo userVo){
        System.out.println("(관리자)유저 권한 수정 Controller 요청");
        int result = adminService.roleUpdate(userNo,userVo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }
}
