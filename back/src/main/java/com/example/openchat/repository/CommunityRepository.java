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
    //내 커뮤니티 리스트
    public List<CommunityVo> communityMyList(String username){
        List<CommunityVo> communityList = sqlSession.selectList("community.communityMyList",username);
        return communityList;
    }

    // 커뮤니티 상세보기
    public CommunityVo findCommunity(Long communityNo) {
        return sqlSession.selectOne("community.communityDetail", communityNo);
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
    //커뮤니티 삭제
    public int communityDelete(Long communityNo){
        int result = sqlSession.insert("community.communityDelete",communityNo);
        if(result == 1 ){
            return 1;
        }else{
            return 2;
        }
    }
}
