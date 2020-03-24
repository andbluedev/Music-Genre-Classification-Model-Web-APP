package com.roomfix.api.common.exceptionhandling.exception;

import org.springframework.http.HttpStatus;

public class BadRequestException extends BaseHttpException {

    public BadRequestException(String message) {
        super(HttpStatus.BAD_REQUEST, message);
    }

    public BadRequestException() {
        super(HttpStatus.BAD_REQUEST, "Bad request");
    }
}
