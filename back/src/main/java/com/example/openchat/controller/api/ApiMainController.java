package com.example.openchat.controller.api;

import com.example.openchat.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/main")
public class ApiMainController {

    @Autowired
    private MainService mainService;

    @GetMapping
    public ResponseEntity mainCommunityAndNoticeList(){
        System.out.println("메인 Controller요청 / ");
        return new ResponseEntity<>(mainService.mainCommunityAndNoticeList(), HttpStatus.OK);
    }
}
