package com.example.openchat.vo;

import lombok.Data;

@Data
public class ReplyVo {
    private Long replyNo;
    private Long communityNo;
    private Long userNo;
    private String replyContent;
    private Long position;
    private Long depth;
    private String regDate;

}
