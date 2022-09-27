package com.example.openchat.controller.api;

import com.example.openchat.service.ChatService;
import com.example.openchat.vo.ChatMessageVo;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/chat")
@Log4j2
public class ApiChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping
    public String chatAll(){
        System.out.println("*****chatAll 메서드 실행됨******");
        log.info("메세지 받음");
        return "chat";
    }


    //Body 안 필요 데이터
    // userNickName, message
    @PostMapping
    public String sendMessage(@RequestBody ChatMessageVo chatMessageVo) throws JsonProcessingException {
        System.out.println("메시지 요청 : "+chatMessageVo);
            chatService.sendMessage(chatMessageVo);

            String key = chatMessageVo.getUserNickName();
            ChatMessageVo Message = (ChatMessageVo) chatService.getMessage(key, ChatMessageVo.class);

        System.out.println("Redis : key :"+key+" / Message : "+Message);
        System.out.println("Message : "+Message.getMessage());
        return Message.getMessage();
    }
}
