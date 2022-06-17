package com.example.openchat.service;

import com.example.openchat.repository.CommunityRepository;
import com.example.openchat.vo.CommunityVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityService {
    @Autowired
    private CommunityRepository communityRepository;

    public int CommunityWrite(CommunityVo communityVo){
        return communityRepository.CommunityWrite(communityVo);
    }
}
