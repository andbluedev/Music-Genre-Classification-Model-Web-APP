package com.roomfix.api.common.exceptionhandling.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class BaseHttpException extends RuntimeException {
    private HttpStatus status;
    private String message;
}
