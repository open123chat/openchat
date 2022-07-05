package com.example.openchat.controller.api;

import com.example.openchat.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notice")
public class ApiNoticeController {

    @Autowired
    private NoticeService noticeService;


}
