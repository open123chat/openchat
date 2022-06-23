package com.example.openchat.controller.api;

import com.example.openchat.service.ReplyService;
import com.example.openchat.vo.ReplyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/reply")
public class ApiReplyContorller {

    @Autowired
    private ReplyService replyService;

    //댓글작성
    @PostMapping("/{communityNo}")
    public ResponseEntity replyWrite(@PathVariable Long communityNo, @RequestBody ReplyVo replyVo){
        System.out.println("댓글 Request 정보 :"+ communityNo+" : "+replyVo);
        ReplyVo replyVo2 = replyService.fingByMaxPosition(communityNo,replyVo);
        int result = replyService.replyWrite(replyVo2);
        if(result == 1){
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
    }
}
