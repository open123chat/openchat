package com.example.openchat.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserVo {
    private Long userNo; //유저no
    private String username; //유저id
    private String password; //유저 패스워드
    private String userNickName; //유저이름
    private String userEmail; //유저 이메일
    private String roles; //유저 권한

}
