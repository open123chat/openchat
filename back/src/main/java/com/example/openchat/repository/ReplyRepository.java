package com.example.openchat.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReplyRepository {

    @Autowired
    private SqlSession sqlSession;

    // Max Position
    public int fingByMaxPosition(){
        return sqlSession.selectOne("reply.findByMaxPosition");
    }
    //댓글 작성
    public void replyWrite(){

    }
}
