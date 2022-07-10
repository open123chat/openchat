package com.example.openchat.controller.api;

import com.example.openchat.service.NoticeService;
import com.example.openchat.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notice")
public class ApiNoticeController {

    @Autowired
    private NoticeService noticeService;

    //공지사항 작성
    @PostMapping
    public ResponseEntity NoticeWrite(NoticeVo noticeVo){
        System.out.println("공지사항 작성 Controller");
        int result = noticeService.NoticeWrite(noticeVo);
        if(result == 1){
            return new ResponseEntity<>(result, HttpStatus.CREATED); //201
        }else{
            return  new ResponseEntity(result, HttpStatus.NOT_FOUND);
        }
    }
    //
}
