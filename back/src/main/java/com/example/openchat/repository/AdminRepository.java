package com.example.openchat.repository;

import com.example.openchat.vo.UserVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdminRepository {
    @Autowired
    private SqlSession sqlSession;

    //관리자 리스트
    public List adminList(){
        return sqlSession.selectList("admin.adminList");
    }
    //유저 리스트
    public List userList(){
        return sqlSession.selectList("admin.userList");
    }

}
