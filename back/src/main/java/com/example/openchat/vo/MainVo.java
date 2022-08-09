package com.example.openchat.vo;

import lombok.Data;

@Data
public class MainVo {
    private Long no; //No
    private Long userNo; // 작성 유저No
    private String title; // 제목
    private String regDate; //생성일
    private String userNickname;// 작성 유저 name
    private String gb; // 커뮤니티, 공지사항 게시물 구분자
    private Long replyCount;// 댓글 수

}
