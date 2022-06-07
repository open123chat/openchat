package com.example.openchat.repository;

import com.example.openchat.vo.UserVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    @Autowired
    SqlSession sqlSession;
    //로그인
    public UserVo findByUserName(String username){
        UserVo userVo = sqlSession.selectOne("user.findByIdAndPasswordUser",username);
        System.out.println("DB 로그인 정보 : "+userVo);
        return userVo;
    }
    //회원가입
    public int JoinUser(UserVo userVo){
        return sqlSession.insert("user.joinUser",userVo);
    }
}
