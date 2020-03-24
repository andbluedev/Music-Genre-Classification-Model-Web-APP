package com.roomfix.api.common.exceptionhandling.exception;

import org.springframework.http.HttpStatus;

public class ResourceNotFoundException extends BaseHttpException {

    public ResourceNotFoundException(String message) {
        super(HttpStatus.NOT_FOUND, message);
    }

    public ResourceNotFoundException() {
        super(HttpStatus.NOT_FOUND, "Could not find this resource");
    }
}
