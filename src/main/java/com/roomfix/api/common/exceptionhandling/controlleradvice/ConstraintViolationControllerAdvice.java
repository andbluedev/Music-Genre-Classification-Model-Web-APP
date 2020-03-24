package com.roomfix.api.common.exceptionhandling.controlleradvice;

import com.roomfix.api.common.exceptionhandling.ErrorResponseBody;
import com.roomfix.api.common.exceptionhandling.exception.ResourceNotFoundException;
import com.idep.api.common.exceptionhandling.validation.entityexists.EntityExists;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.constraints.NotNull;

/**
 * Controller Advice to handle 404 errors
 * Will override the response with a 404 NOT FOUND response status and an {@link ErrorResponseBody}
 * These can be due to a {@link ConstraintViolationException} due to a {@link EntityExists} constraint violated
 * Or due to a {@link ResourceNotFoundException} thrown by the controller
 */
@ControllerAdvice
public class ConstraintViolationControllerAdvice {

    /**
     * Handle exception when a {@link NotNull} validation constraint is violated
     * @param exception The exception thrown by the controller
     * @return The response entity describing the error
     */
    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<ErrorResponseBody> handleNotNull(ConstraintViolationException exception) {

        // Check if one of the violation is `EntityExists`
        boolean violationsContainsEntityExists = false;
        for (ConstraintViolation violation : exception.getConstraintViolations()) {
            if (violation.getConstraintDescriptor().getAnnotation().annotationType().equals(EntityExists.class)) {
                violationsContainsEntityExists = true;
                break;
            }
        }

        // TODO: This will not re-run any ExceptionHandler. We might need to move this logic to a common ExceptionHandler for all ConstraintViolationException
        if (!violationsContainsEntityExists) {
            throw exception;
        }

        return new ErrorResponseBody(new ResourceNotFoundException()).toResponseEntity();
    }
}
