package com.example.openchat.controller.api;

import com.example.openchat.vo.ChatRoomMessageVo;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class ApiStompChatController {
    // 특정 Broker로 메시지 전달
    private final SimpMessagingTemplate template;

    //@MessageMapping = WebSocket으로 들어오는 메시지를 처리

    //StompWebSocketConfig에서 설정한 setApplicationDestinationPrefixes("/pub") 와 @MessageMapping 경로가 병합된다.
    // /pub/chat/message
    @MessageMapping(value = "/chat/message")
    public void message(ChatRoomMessageVo message){
        //Client에서 받은 메시지
        System.out.println("Client 메시지 정보 : "+message);
        // /sub/chat/room/[roomId] = 채팅방을 구분하는 값
        template.convertAndSend("/sub/chat/room/"+message.getRoomId(), message);
    }
}
