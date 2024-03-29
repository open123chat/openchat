package com.example.openchat.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
@Setter
@ToString
public class UserVo {
    private Long userNo; //유저no
    private String username; //유저id
    private String password; //유저 패스워드
    private String userNickName; //유저이름
    private String userEmail; //유저 이메일
    private String roles; //유저 권한 - (ROLE_ADMIN or ROLE_MANAGER or ROLE_USER )
    private String regDate; // 생성 날짜
    private String deleteDate; // 삭제 날짜
    private String state; // 유저 상태

    public List<String> getRoleList(){
        if(this.roles.length()>0){
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }
}
