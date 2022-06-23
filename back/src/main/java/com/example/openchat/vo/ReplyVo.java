package com.example.openchat.vo;

import lombok.Data;

@Data
public class ReplyVo {
    private Long replyNo; //댓글 No
    private Long communityNo; // 커뮤니티 No
    private Long userNo; //댓글 작성자 user No
    private String username; //댓글 작성자 name
    private String replyContent; //댓글 내용
    private Long position; // 부모 깊이
    private Long depth; // 대댓글 시 깊이.
    private String regDate; // 댓글 생성 날짜

}
