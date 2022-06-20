package com.example.openchat.service;

import com.example.openchat.repository.CommunityRepository;
import com.example.openchat.vo.CommunityVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityService {
    @Autowired
    private CommunityRepository communityRepository;

    //커뮤니티 리스트
    public List<CommunityVo> CommunityList(){
        List<CommunityVo> communityList= communityRepository.CommunityList();
        return communityList;
    }

    // 커뮤니티 상세보기
    public CommunityVo findCommunity(Long communityNo) {
        return communityRepository.findCommunity(communityNo);
    }

    //커뮤니티 작성
    public int CommunityWrite(CommunityVo communityVo){
        return communityRepository.CommunityWrite(communityVo);
    }
}
