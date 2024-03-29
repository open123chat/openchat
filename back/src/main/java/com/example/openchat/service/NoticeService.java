package com.example.openchat.service;

import com.example.openchat.repository.NoticeRepository;
import com.example.openchat.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    //공지사항 리스트
    public List<NoticeVo> noticeList(){
        return noticeRepository.noticeList();
    }
    //공지사항 작성
    public int NoticeWrite(NoticeVo noticeVo){
        return noticeRepository.NoticeWrite(noticeVo);
    }
    //공지사항 상세보기
    public NoticeVo noticeDetail(Long noticeNo){
        return noticeRepository.noticeDetail(noticeNo);
    }
    //공지사항 삭제
    public int noticeDelete(Long noticeNo){
        return noticeRepository.noticeDelete(noticeNo);
    }
    //공지사항 수정
    public int noticeUpdate(Long noticeNo, NoticeVo noticeVo){
        noticeVo.setNoticeNo(noticeNo);
        System.out.println("공지사항 수정 vo :"+noticeVo);
        return noticeRepository.noticeUpdate(noticeVo);

    }
}
