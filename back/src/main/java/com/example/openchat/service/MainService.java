package com.example.openchat.service;

import com.example.openchat.repository.MainRepository;
import com.example.openchat.vo.CommunityVo;
import com.example.openchat.vo.MainVo;
import com.example.openchat.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MainService {
    @Autowired
    private MainRepository mainRepository;

    public Map mainCommunityAndNoticeList(){
        List<MainVo> mainCommunityAndNoticeList = mainRepository.mainCommunityAndNoticeList();
        System.out.println("메인 Object : "+mainCommunityAndNoticeList);

        Map<Object,Object> mainListEntity = new HashMap<>();
        List<MainVo> communityList = new ArrayList<>();
        List<MainVo> noticeList = new ArrayList<>();

        for (MainVo mainVo : mainCommunityAndNoticeList){
            if(mainVo.getGb().equals("community")){
                communityList.add(mainVo);
            }
            if(mainVo.getGb().equals("notice")){
                noticeList.add(mainVo);
            }
        }
        System.out.println("Community List : "+communityList);
        System.out.println("Notice List : "+noticeList);

        mainListEntity.put("community",communityList);
        mainListEntity.put("notice",noticeList);

        System.out.println("Map : "+mainListEntity);
        return mainListEntity;
    }

}
