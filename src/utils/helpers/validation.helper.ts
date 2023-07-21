/* eslint-disable prettier/prettier */
import { ValidationError } from 'class-validator';

export const convertValidationErrorsToErrorResponse = (
  errors: ValidationError[],
) => {
  const my_error: any = {};
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    my_error[error.property] = [];
    Object.entries(error.constraints).forEach(([key, value]) => {
      my_error[error.property].push(error.constraints[key]);
    });
  }

  return my_error;
};
