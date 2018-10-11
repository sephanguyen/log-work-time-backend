import { Middleware, Res } from '@tsed/common';
import * as Express from 'express';

@Middleware()
export class NotFoundMiddleware {
  use(@Res() response: Express.Response) {
    response.status(404).json({ status: 404, message: 'Not found' });
  }
}
