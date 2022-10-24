package com.example.openchat.vo;

import lombok.Data;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Data
public class ChatRoomVo {
    // 생성 Room 정보
    private Long roomId;
    private Long roomName;
    private Set<WebSocketSession> sessions = new HashSet<>();
    private String regDate;

}
