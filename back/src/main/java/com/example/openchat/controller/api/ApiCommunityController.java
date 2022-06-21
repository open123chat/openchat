package com.example.openchat.controller.api;

import com.example.openchat.service.CommunityService;
import com.example.openchat.vo.CommunityVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/community")
public class ApiCommunityController {

    @Autowired
    private CommunityService communityService;

    //커뮤니티 메인(모든 데이터)
    @GetMapping("/list")
    public ResponseEntity CommunityList(
//            @RequestParam(defaultValue = "") int page,
//            @RequestParam(defaultValue = "") int size
    ) {
        System.out.println("커뮤니티 List controller 주소 요청옴?");
        return new ResponseEntity<>(communityService.CommunityList(),HttpStatus.OK);
    }

    // 커뮤니티 상세보기
    @GetMapping("/{communityNo}")
    public ResponseEntity findCommunity(@PathVariable Long communityNo) {
        System.out.println("커뮤니티 상세보기 Controller 요청");
        return new ResponseEntity<>(communityService.findCommunity(communityNo), HttpStatus.OK);
    }

    //커뮤니티 작성
    @PostMapping("/write")
    public ResponseEntity CommunityWrite(@RequestBody CommunityVo communityVo){
        System.out.println("ㅠㅠ");
        System.out.println("커뮤니티 쓰기 Data : " + communityVo);
        return new ResponseEntity<>(communityService.CommunityWrite(communityVo),HttpStatus.CREATED);
    }


}
