package com.example.openchat.vo;

import lombok.Data;

@Data
public class ChatRoomMessageVo {
    private Long roomId;
    private Long userNo;
    private String userNickName;
    private String message;
    private String regDate;

}
