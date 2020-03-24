package com.roomfix.api.common.exceptionhandling.controlleradvice;

import com.roomfix.api.common.exceptionhandling.ErrorResponseBody;
import com.roomfix.api.common.exceptionhandling.exception.BaseHttpException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HttpExceptionControllerAdvice {
    @ExceptionHandler({BaseHttpException.class})
    public ResponseEntity<ErrorResponseBody> handleBaseHttpException(BaseHttpException httpException) {
        return new ErrorResponseBody(httpException).toResponseEntity();
    }
}
