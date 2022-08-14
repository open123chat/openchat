package com.example.openchat.vo;

import lombok.Data;

@Data
public class UserInfoVo {
    private Long userNo; //userNo
    private String username; //username = userId
    private String userNickName; //유저 닉네임
    private String userEmail; //유저 이메일
    private String roles; // 해당 유저 권한
    private String regDate; //유저 생성일
    private String deleteDate; //유저 삭제일

}
