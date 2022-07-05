package com.example.openchat.vo;

import lombok.Data;

@Data
public class NoticeVo {
    private Long noticeNo; //공지사항No
    private Long userNo; // 작성 유저No
    private String noticeTitle; // 공지사항 제목
    private String noticeContent; //공지사항 내용
    private String regDate; //공지사항 생성일
    private String userNickname;// 작성 유저 name
}
