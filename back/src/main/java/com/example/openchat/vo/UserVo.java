package com.example.openchat.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserVo {
    private Long userNo; //유저no
    private String userName; //유저이름
    private String userPassword; //유저 패스워드
    private String userEmail; //유저 이메일

}
