package com.roomfix.api.common.exceptionhandling.exception;

import org.springframework.http.HttpStatus;

public class InternalServerErrorException  extends BaseHttpException {
    public InternalServerErrorException(String message) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message);
    }

    public InternalServerErrorException() {
        super(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
}
