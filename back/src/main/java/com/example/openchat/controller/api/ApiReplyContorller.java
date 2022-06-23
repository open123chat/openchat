package com.example.openchat.controller.api;

import com.example.openchat.service.ReplyService;
import com.example.openchat.vo.ReplyVo;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void replyWrite(@PathVariable Long communityNo, @RequestBody ReplyVo replyVo){
        System.out.println("댓글 Request 정보 :"+ communityNo+" : "+replyVo);
        int Maxresult = replyService.fingByMaxPosition();
        System.out.println(Maxresult);
//        replyService.replyWrite();
    }
}
