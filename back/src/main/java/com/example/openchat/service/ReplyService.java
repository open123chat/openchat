package com.example.openchat.service;

import com.example.openchat.repository.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReplyService {

    @Autowired
    private ReplyRepository replyRepository;

    // Max Position
    public int fingByMaxPosition(){
        return replyRepository.fingByMaxPosition();
    }
    //댓글 작성
    public void replyWrite(){
        replyRepository.replyWrite();
    }
}
