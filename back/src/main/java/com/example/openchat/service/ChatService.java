package com.example.openchat.service;

import com.example.openchat.vo.ChatMessageVo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class ChatService<T> {

    @Autowired
    private RedisTemplate<String,Object> redisTemplate; //자바 객체를 redis에 저장
    @Autowired
    private ObjectMapper objectMapper;


    public void sendMessage(ChatMessageVo chatMessageVo) throws JsonProcessingException {
        String key = chatMessageVo.getUserNickname();
        redisTemplate.opsForValue().set(key, objectMapper.writeValueAsString(chatMessageVo));
    }

    public <T> T getMessage(String key, Class<T> classType) throws JsonProcessingException {
        String redisValue = (String)redisTemplate.opsForValue().get(key);
        return objectMapper.readValue(redisValue,classType);
    }
}
