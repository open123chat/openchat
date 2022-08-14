package com.example.openchat.controller.api;

import com.example.openchat.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/admin")
public class ApiAdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/userList")
    public ResponseEntity userList(){
        System.out.println("(관리자)유저 리스트 Controllor 요청");
        return new ResponseEntity<>(adminService.userList(), HttpStatus.OK);
    }
}
