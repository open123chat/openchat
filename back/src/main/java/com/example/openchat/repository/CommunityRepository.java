package com.example.openchat.repository;

import com.example.openchat.vo.CommunityVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommunityRepository {

    @Autowired
    private SqlSession sqlSession;

    //커뮤니티 리스트
    public List<CommunityVo> CommunityList(){
        List<CommunityVo> communityList = sqlSession.selectList("community.communityList");
        return communityList;
    }
    //커뮤니티 작성
    public int CommunityWrite(CommunityVo communityVo){
        int result = sqlSession.insert("community.communityWrite",communityVo);
        if(result ==1){
            return 1;
        }else{
            return 2;
        }
    }
}
