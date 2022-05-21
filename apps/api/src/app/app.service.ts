import { Injectable } from '@nestjs/common';
// import { Message } from '@fem/api-interfaces';

@Injectable()
export class AppService {
  getData(): string {
    return ('Welcome to api!' );
  }
}
