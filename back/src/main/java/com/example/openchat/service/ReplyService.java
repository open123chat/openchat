package com.example.openchat.service;

import com.example.openchat.repository.ReplyRepository;
import com.example.openchat.vo.ReplyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyService {

    @Autowired
    private ReplyRepository replyRepository;

    // Max Position
    public ReplyVo fingByMaxPosition(Long communityNo, ReplyVo replyVo){
        int Maxresult = replyRepository.fingByMaxPosition();
        System.out.println("MaxPosition : "+Maxresult);
        Long MaxPosition = Long.valueOf(Maxresult + 1);
        System.out.println("Long MaxPosition : "+MaxPosition);
        replyVo.setPosition(MaxPosition);
        replyVo.setDepth(1L);
        replyVo.setCommunityNo(communityNo);
        return replyVo;
    }
    //댓글 작성
    public int replyWrite(ReplyVo replyVo){
        return replyRepository.replyWrite(replyVo);
    }

    //댓글 리스트
    public List<ReplyVo> replyList(Long communityNo){
        return replyRepository.replyList(communityNo);
    }
}
