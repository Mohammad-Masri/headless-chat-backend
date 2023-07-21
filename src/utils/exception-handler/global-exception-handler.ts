import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(HttpException)
export class GlobalExceptionHandler implements ExceptionFilter {
  private readonly logger = new Logger();

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const error_log = {
      request: {
        url: request.url,
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
      },
      message: exception.getResponse(),
    };

    this.logger.error(error_log);

    response.status(status).json(exception.getResponse());
  }
}
