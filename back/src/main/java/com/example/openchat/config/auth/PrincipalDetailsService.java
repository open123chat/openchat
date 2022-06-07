package com.example.openchat.config.auth;

import com.example.openchat.repository.UserRepository;
import com.example.openchat.vo.UserVo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("principalDetailsService : "+username);
        UserVo userEntity = userRepository.findByUserName(username);
        System.out.println("Service userEntity :"+userEntity);
        return new PrincipalDetails(userEntity);
    }
}
