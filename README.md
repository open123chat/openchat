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


### React-Spring chat 프로젝트

