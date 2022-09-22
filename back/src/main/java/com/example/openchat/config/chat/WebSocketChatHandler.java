package com.example.openchat.config.chat;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

@Component
@Log4j2
public class WebSocketChatHandler extends TextWebSocketHandler {

    private static List<WebSocketSession> list = new ArrayList<>();

    @Override
    protected void handleTextMessage(WebSocketSession webSocketSession, TextMessage message) throws  Exception{
        String payload = message.getPayload();
        log.info("전송 데이터 : "+payload);

        for(WebSocketSession session : list){
            session.sendMessage(message);
        }
    }

    //클라이언트 접속 시 실행 메소드
    @Override
    public void afterConnectionEstablished(WebSocketSession webSocketSession) throws Exception{
        list.add(webSocketSession);
        log.info(webSocketSession+ "접속");
    }

    //클라이언트 접속 종료 실행 메소드
    @Override
    public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus status) throws  Exception{
        log.info(webSocketSession+"접속 해제");
        list.remove(webSocketSession);
    }
}
