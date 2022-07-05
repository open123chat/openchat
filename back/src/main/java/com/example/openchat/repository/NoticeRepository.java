package com.example.openchat.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class NoticeRepository {
    @Autowired
    private SqlSession sqlSession;


}
