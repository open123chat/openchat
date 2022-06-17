package com.example.openchat.repository;

import com.example.openchat.vo.CommunityVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CommunityRepository {

    @Autowired
    private SqlSession sqlSession;

    public int CommunityWrite(CommunityVo communityVo){
        int result = sqlSession.insert("community.communityWrite",communityVo);
        if(result ==1){
            return 1;
        }else{
            return 2;
        }
    }
}
