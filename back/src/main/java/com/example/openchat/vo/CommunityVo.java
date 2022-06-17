package com.example.openchat.vo;

import lombok.Data;

@Data
public class CommunityVo {
    private Long communityNo; //커뮤니티No
    private Long userNo; // 작성 유저No
    private String communityTitle; // 커뮤니티제목
    private String communityContent; //커뮤니티 내용
    private String communityDate; //커뮤니티 생성일
    private String username;// 작성 유저 name
}
