import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  upload(): string {
    return 'Hello World!';
  }
}
