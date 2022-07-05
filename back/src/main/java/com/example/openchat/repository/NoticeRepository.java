package com.example.openchat.repository;

import com.example.openchat.vo.NoticeVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class NoticeRepository {
    @Autowired
    private SqlSession sqlSession;

    //공지사항 작성
    public int NoticeWrite(NoticeVo noticeVo){
        int result = sqlSession.insert("notice.noticeWrite", noticeVo);
        if(result == 1){
            return result;
        }else{
            return 2;
        }
    }

}
