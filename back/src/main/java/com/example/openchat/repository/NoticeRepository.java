package com.example.openchat.repository;

import com.example.openchat.vo.NoticeVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoticeRepository {
    @Autowired
    private SqlSession sqlSession;

    //공지사항 리스트
    public List<NoticeVo> noticeList(){
        List<NoticeVo> noticeList = sqlSession.selectList("notice.noticeList");
        System.out.println("공지사항 리스트 Entity : "+noticeList);
        return noticeList;
    }
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
