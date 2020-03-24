package com.roomfix.api.common.exceptionhandling.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;


/**
 * Entity representing the response body of an error from
 * an external API called by Phoenix-API
 * It has a timestamp, the HTTP status and a message
 * It can be serialized to the response body
 */
@Getter
@Setter
public class RestTemplateException extends RuntimeException {
    private LocalDateTime timestamp;
    private HttpStatus status;
    private String message;

    public RestTemplateException(String message, HttpStatus status) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
    }

    public RestTemplateException(String message, ResponseEntity responseEntity) {
        this(message + "[" + responseEntity.getStatusCode() + "] : " + responseEntity.getBody(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public RestTemplateException(ResponseEntity responseEntity) {
        this("External API Server Error", responseEntity);
    }

}
