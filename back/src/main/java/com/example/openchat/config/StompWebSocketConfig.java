package com.example.openchat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@EnableWebSocketMessageBroker
@Configuration
public class StompWebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // endpoint = /tomp
    // setAllowedOrigins = 허용 url
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/stomp/chat")
                .setAllowedOrigins("http://localhost:3000")
                .withSockJS();
    }

    //애플리케이션 내부 path를 지정할 수 있다.
    //  /topic = /pub, /sub
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/pub");
        // /sub 경로로 SimpleBroker 등록
        // SimpleBroker - 해당 경로를 Subscribe하는 Client에게 메세지를 전달하는 작업을 수행.
        registry.enableSimpleBroker("/sub");
    }

}
