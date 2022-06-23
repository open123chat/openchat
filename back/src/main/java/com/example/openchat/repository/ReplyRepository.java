package com.example.openchat.repository;

import com.example.openchat.vo.ReplyVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReplyRepository {

    @Autowired
    private SqlSession sqlSession;

    // Max Position
    public int fingByMaxPosition(){
        Integer result = sqlSession.selectOne("reply.findByMaxPosition");
        return result == null ? 0 : result;
    }
    //댓글 작성
    public int replyWrite(ReplyVo replyVo){
        int result = sqlSession.insert("reply.replyWrite",replyVo);
        if(result == 1){
            return 1;
        }else{
            return 2;
        }
    }
    //댓글 리스트
    public List<ReplyVo> replyList(Long communityNo){
        List<ReplyVo> replyList = sqlSession.selectList("reply.replyList",communityNo);
        return replyList;
    }
}
