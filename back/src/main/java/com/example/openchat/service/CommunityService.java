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
    // 내커뮤니티 리스트
    public List<CommunityVo> communityMyList(String username){
        List<CommunityVo> communityMyList = communityRepository.communityMyList(username);
        System.out.println("내 커뮤니티 리스트 : "+communityMyList);
        return communityMyList;
    }

    // 커뮤니티 상세보기
    public CommunityVo findCommunity(Long communityNo) {
        return communityRepository.findCommunity(communityNo);
    }

    //커뮤니티 작성
    public int CommunityWrite(CommunityVo communityVo){
        return communityRepository.CommunityWrite(communityVo);
    }

    //커뮤니티 삭제
    public int communityDelete(Long communityNo){
        return communityRepository.communityDelete(communityNo);
    }

    //커뮤니티 수정
    public int communityUpdate(CommunityVo communityVo){
        return communityRepository.communityUpdate(communityVo);
    }

    //커뮤니티 검색
    public List<CommunityVo> communitySearch(String communityTitle){
//        List<CommunityVo> communitySearchList =
        return communityRepository.communitySearch(communityTitle);
    }
}
