package com.example.openchat.service;

import com.example.openchat.repository.NoticeRepository;
import com.example.openchat.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    //공지사항 작성
    public int NoticeWrite(NoticeVo noticeVo){
        return noticeRepository.NoticeWrite(noticeVo);
    }
}
