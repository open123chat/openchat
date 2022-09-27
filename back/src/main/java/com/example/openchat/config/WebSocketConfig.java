package com.example.openchat.config;

import com.example.openchat.config.chat.WebSocketChatHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketConfigurer {

    private final WebSocketChatHandler webSocketChatHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketChatHandler,"/ws/chat")
                .setAllowedOrigins("http://localhost:3000")
                .withSockJS();
        System.out.println("웹소켓 들어옴");
    }
}
