## 환경
- windows10
- Intelli J
- Visual Studio Code
- jdk1.8
- tomcat9.0
- mysql8.0
- postman
- lombok
- gson (json파싱)
- 인코딩 utf-8
- git

## Back 의존성
- Spring Boot DevTools
- Lombok
- MariaDB Driver
- MyBatis
- Spring Security
- Spring Web
- auth-jwt
- Redis

## Front 환경
- npx create-react-app my-app
- cd my-app
- npm i (open folder 시)
- npm start

리엑트, 라우터

- npm i react-router react-router-dom

부트 스트랩

- npm i react-bootstrap bootstrap

부트스트랩 사용 시 꼭 import 해주기 import 'bootstrap/dist/css/bootstrap.css';

jwt토큰 decode

- npm i jwt-decode 
[https://www.npmjs.com/package/jwt-decode](https://www.npmjs.com/package/jwt-decode)

Draft.js
- npm i styled-components
- npm i react-draft-wysiwyg draft-js Edit div태그 안 editorState상태 값을 Html 값으로 변환 라이브러리
- npm i draftjs-to-html

## MySQL 테이블 생성
```sql
CREATE TABLE `user` (   `userNo` int NOT NULL AUTO_INCREMENT,   
				`username` varchar(45) NOT NULL,   
				`password` mediumtext NOT NULL,   
				`userNickName` varchar(45) NOT NULL,   
				`userEmail` varchar(45) NOT NULL,   
				`roles` varchar(45) NOT NULL,   
				`regDate` datetime NOT NULL,   
				`deleteDate` datetime DEFAULT NULL,   
				`state` enum('T','F') NOT NULL,   
				PRIMARY KEY (`userNo`) ) 
				ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `community` (   
				`communityNo` int NOT NULL AUTO_INCREMENT,   
				`userNo` int NOT NULL,   
				`communityTitle` varchar(45) NOT NULL,   
				`communityContent` mediumtext NOT NULL,   
				`communityDate` datetime NOT NULL,   
				PRIMARY KEY (`communityNo`,`userNo`),   
				KEY `fk_community_user` (`userNo`),   
				CONSTRAINT `fk_community_user` 
				FOREIGN KEY (`userNo`) 
				REFERENCES `user` (`userNo`) ) 
				ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `reply` (   
			`replyNo` int NOT NULL AUTO_INCREMENT,   
			`communityNo` int NOT NULL,   
			`userNo` int NOT NULL,   
			`replyContent` varchar(45) NOT NULL,   
			`position` int NOT NULL,   
			`depth` int NOT NULL,   
			`regDate` datetime NOT NULL,   
			PRIMARY KEY (`replyNo`,`communityNo`,`userNo`),   
			KEY `fk_reply_community1` (`communityNo`),   
			KEY `fk_reply_user1` (`userNo`),   
			CONSTRAINT `fk_reply_community1` 
			FOREIGN KEY (`communityNo`) 
			REFERENCES `community` (`communityNo`),   
			CONSTRAINT `fk_reply_user1` 
			FOREIGN KEY (`userNo`) 
			REFERENCES `user` (`userNo`) ) 
			ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `notice` (   
			`noticeNo` int NOT NULL AUTO_INCREMENT,   
			`userNo` int NOT NULL,   
			`noticeTitle` varchar(45) NOT NULL,   
			`noticeContent` mediumtext NOT NULL,   
			`regDate` datetime NOT NULL,   
			PRIMARY KEY (`noticeNo`,`userNo`),   
			KEY `fk_notice_user1` (`userNo`),   
			CONSTRAINT `fk_notice_user1` 
			FOREIGN KEY (`userNo`) 
			REFERENCES `user` (`userNo`) ) 
			ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```



# openchat
### Redis 설치
https://github.com/microsoftarchive/redis/releases

설치 버전  3.2.100 사용 하였음

![image](https://user-images.githubusercontent.com/74044234/155298804-692fd2e8-e4f6-4a25-a059-0b818ada5a84.png)

redis-server.exe 파일을 실행하면 Redis 서버를 실행 시킬 수 있다.

redis-cli.exe 파일을 실행하면 Redis 서버에 명령어를 실행 시킬 수 있는 명령어 창이 실행된다.

레디스는 key-value값의 형식으로 저장되며, 캐시 or 메시지 중개자(Pub/Sub)로 사용되는 DB이다.

Publishers - 메시지를 전송

Subscribers - 메세지를 구독 받음(여러 채널을 구독 가능)

Channel - 메세지를 주고 받는 공간

Pub이 메세지를 Channel에 전송하면 채널을 구독하고 있는 Sub에게 전송된다.

전송 시 Channel에 어떤 Sub(누가)이 있는지 상관 없이 메세지만 보내게 되는에 Sub이 아무도 없을 경우 메세지는 삭제 된다.

### 레디스 실행

```
set example spring-redis

key *

get example
```
![image](https://user-images.githubusercontent.com/74044234/155299914-046bbc3f-dfa6-4517-a344-41e7a64b6dcd.png)

### 레디스 dependency
```
<!--Redis-->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-redis-reactive</artifactId>
</dependency>
```

### yml
```
spring:
  redis:
    lettuce:
      pool:
        min-idle: 0
        max-idle: 8
        max-active: 8
    port: 6379
    host: localhost
```

### Spring + Redis 연동 (Config 파일)
```
package com.example.openchat.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {
    @Value("${spring.redis.port}")
    private int port;

    @Value("${spring.redis.host}")
    private String host;
    @Bean
    public RedisConnectionFactory redisConnectionFactory(){
        LettuceConnectionFactory lettuceConnectionFactory = new LettuceConnectionFactory(host,port);
        return lettuceConnectionFactory;
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(){
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        //Redis Connection
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        //Redis Key
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        //Redis value
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        return redisTemplate;
    }

    @Bean
    public StringRedisTemplate stringRedisTemplate(){
        StringRedisTemplate stringRedisTemplate = new StringRedisTemplate();
        stringRedisTemplate.setKeySerializer(new StringRedisSerializer());
        stringRedisTemplate.setValueSerializer(new StringRedisSerializer());
        stringRedisTemplate.setConnectionFactory(redisConnectionFactory());
        return stringRedisTemplate;
    }
}

```


### 예제 PostMan 실행
![image](https://user-images.githubusercontent.com/74044234/155322119-2e735c88-7435-41da-865b-2e18c998393d.png)


### JWT 
https://www.notion.so/JWT-Json-Web-Token-dd614cdad8d24ea58eee9215241bdfb7

