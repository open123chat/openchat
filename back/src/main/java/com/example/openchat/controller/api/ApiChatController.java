package com.example.openchat.controller.api;

import com.example.openchat.service.ChatService;
import com.example.openchat.vo.ChatMessageVo;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/chat")
public class ApiChatController {

    @Autowired
    private ChatService chatService;
    @PostMapping
    public String sendMessage(@RequestBody ChatMessageVo chatMessageVo) throws JsonProcessingException {
            chatService.sendMessage(chatMessageVo);

            String key = chatMessageVo.getUserNickname();
            ChatMessageVo Message = (ChatMessageVo) chatService.getMessage(key, ChatMessageVo.class);

        System.out.println("Redis : key :"+key+" / Message : "+Message);
        return Message.getMessage();
    }
}
