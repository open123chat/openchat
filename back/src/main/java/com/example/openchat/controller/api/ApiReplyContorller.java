package com.example.openchat.controller.api;

import com.example.openchat.service.ReplyService;
import com.example.openchat.vo.ReplyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/reply")
public class ApiReplyContorller {

    @Autowired
    private ReplyService replyService;

    //댓글작성
    @PostMapping("/{communityNo}")
    public ResponseEntity replyWrite(@PathVariable Long communityNo, @RequestBody ReplyVo replyVo){
        System.out.println("댓글 Request 정보 :"+ communityNo+" : "+replyVo);

        if(replyVo.getPosition()!=null && replyVo.getDepth() < 3){
            //대댓글 작성
            System.out.println("대댓글 Controller");
            int result = replyService.reReplyWrite(communityNo, replyVo);
            if (result == 1) {
                return new ResponseEntity<>(result, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
            }
        }else {
            //댓글 작성
            ReplyVo replyVo2 = replyService.fingByMaxPosition(communityNo, replyVo);
            int result = replyService.replyWrite(replyVo2);
            if (result == 1) {
                return new ResponseEntity<>(result, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
            }
        }
    }

    //댓글 리스트
    @GetMapping("/{communityNo}")
    public ResponseEntity replyList(@PathVariable Long communityNo){
        System.out.println("댓글 리스트 요청 들어옴 : "+ communityNo);
        return new ResponseEntity<>(replyService.replyList(communityNo),HttpStatus.OK);
    }

    //댓글 삭제
    @DeleteMapping("/{replyNo}")
    public ResponseEntity replyDelete(@PathVariable Long replyNo){
        System.out.println("댓글 삭제 : "+ replyNo);
        int result = replyService.replyDelete(replyNo);
        if(result == 1){
            return new ResponseEntity<>(result,HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }
}
