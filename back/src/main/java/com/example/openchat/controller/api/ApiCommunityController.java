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

    //내 커뮤니티 리스트
    @GetMapping("/mylist/{username}")
    public ResponseEntity communityMyList(@PathVariable String username){
        System.out.println("내커뮤니티 list 주소 요청");
        return new ResponseEntity<>(communityService.communityMyList(username),HttpStatus.OK);
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
        System.out.println("커뮤니티 쓰기 Data : " + communityVo);
        int result = communityService.CommunityWrite(communityVo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }

    //커뮤니티 삭제
    @DeleteMapping("/{communityNo}")
    public ResponseEntity communityWrite(@PathVariable Long communityNo){
        System.out.println("커뮤니티 삭제 요청 들어옴 : "+communityNo);
        int result = communityService.communityDelete(communityNo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }

    //커뮤니티 수정
    @PutMapping("/{communityNo}")
    public ResponseEntity communityUpdate(@PathVariable Long communityNo, @RequestBody CommunityVo communityVo){
        System.out.println("커뮤니티 수정 요청 들어옴 : "+communityNo+" : " +communityVo );
        communityVo.setCommunityNo(communityNo);
        int result = communityService.communityUpdate(communityVo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }

//    //커뮤니티 검색
//    @GetMapping("/{communityTitle}")
//    public ResponseEntity communitySearch(@PathVariable String communityTitle){
//        System.out.println("커뮤니티 Search 요청 : "+communityTitle);
//        return new ResponseEntity<>(communityService.communitySearch(communityTitle),HttpStatus.OK);
//    }
}
