package com.example.openchat.vo;

import lombok.Data;

@Data
public class ChatMessageVo {
    private String userNickname;
    private String message;
    private String regDate;
}
