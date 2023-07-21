import { NestFactory } from '@nestjs/core';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { GLOBAL_URL_PREFIX, SERVER_PORT } from './utils/config/server.config';
import { GlobalExceptionHandler } from './utils/exception-handler/global-exception-handler';
import { ServerError } from './utils/config/server-response.config';
import SERVER_ERRORS from './utils/config/server-errors.config';
import { convertValidationErrorsToErrorResponse } from './utils/helpers/validation.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_URL_PREFIX);
  app.enableCors();
  app.useGlobalFilters(new GlobalExceptionHandler());
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        throw new ServerError(
          HttpStatus.BAD_REQUEST,
          `Validation Error`,
          SERVER_ERRORS.VALIDATION_ERROR,
          convertValidationErrorsToErrorResponse(errors),
        );
      },
    }),
  );
  await app.listen(SERVER_PORT || 3000).finally(() => {
    console.log(
      `server is running in http://localhost:${SERVER_PORT}${GLOBAL_URL_PREFIX}`,
    );
  });
}
bootstrap();
