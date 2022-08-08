package com.example.openchat.controller.api;

import com.example.openchat.service.NoticeService;
import com.example.openchat.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notice")
public class ApiNoticeController {

    @Autowired
    private NoticeService noticeService;

    //공지사항 리스트
    @GetMapping
    public ResponseEntity NoticeList(){
        System.out.println("공지사항 리스트 Controller");
        return new ResponseEntity<>(noticeService.noticeList(), HttpStatus.OK);
    }
    //공지사항 작성
    @PostMapping
    public ResponseEntity NoticeWrite(@RequestBody NoticeVo noticeVo) {
        System.out.println("공지사항 작성 Controller : " + noticeVo);
        int result = noticeService.NoticeWrite(noticeVo);
        if (result == 1) {
            return new ResponseEntity<>(result, HttpStatus.CREATED); //201
        } else {
            return new ResponseEntity(result, HttpStatus.NOT_FOUND);
        }
    }

    //공지사항 상세보기
    @GetMapping("/{noticeNo}")
    public ResponseEntity noticeDetail(@PathVariable Long noticeNo){
        System.out.println("공지사항 상세보기 : "+noticeNo);
        return new ResponseEntity<>(noticeService.noticeDetail(noticeNo),HttpStatus.OK);
    }

    //공지사항 삭제
    @DeleteMapping("/{noticeNo}")
    public ResponseEntity noticeDelete(@PathVariable Long noticeNo){
        System.out.println("공지사항 삭제 : "+noticeNo);
        int result = noticeService.noticeDelete(noticeNo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }

    //공지사항 수정
    @PutMapping("/{noticeNo}")
    public ResponseEntity noticeUpdate(@PathVariable Long noticeNo, @RequestBody NoticeVo noticeVo){
        System.out.println("공지사항 수정 no :"+noticeNo +" body :"+noticeVo);
        int result = noticeService.noticeUpdate(noticeNo,noticeVo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }
}
