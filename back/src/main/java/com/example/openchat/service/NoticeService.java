package com.example.openchat.service;

import com.example.openchat.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

}
