package iba.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class UserDto implements Serializable {

    @Null
    private Long id;

    @NotBlank
    private String firstName;

    @Null
    private LocalDateTime created;
}
