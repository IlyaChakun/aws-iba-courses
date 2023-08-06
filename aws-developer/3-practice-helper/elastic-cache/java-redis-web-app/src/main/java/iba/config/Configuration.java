package iba.config;

import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

@org.springframework.context.annotation.Configuration
public class Configuration {

    @Bean
    public Config getRedissonConfig(@Value("${redis.url}") String redisUrl) {
        Config config = new Config();
        config.useSingleServer().setAddress(redisUrl);
        return config;
    }

    @Bean
    public RedissonClient getReddisonClient(Config config) {
        return Redisson.create(config);
    }

}