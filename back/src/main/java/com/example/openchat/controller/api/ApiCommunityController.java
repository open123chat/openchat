package com.example.openchat.controller.api;

import com.example.openchat.service.CommunityService;
import com.example.openchat.vo.CommunityVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/community")
public class ApiCommunityController {

    @Autowired
    private CommunityService communityService;

    @PostMapping("/write")
    public ResponseEntity CommunityWrite(@RequestBody CommunityVo communityVo){
        System.out.println("커뮤니티 쓰기 Data : "+communityVo);
        return new ResponseEntity<>(communityService.CommunityWrite(communityVo),HttpStatus.CREATED);
    }


}
