package com.example.openchat.repository;

import com.example.openchat.vo.CommunityVo;
import com.example.openchat.vo.MainVo;
import com.example.openchat.vo.NoticeVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class MainRepository {

    @Autowired
    private SqlSession sqlSession;

    public List<MainVo> mainCommunityAndNoticeList(){
        return sqlSession.selectList("main.mainCommunityAndNoticeList");
    }

}
