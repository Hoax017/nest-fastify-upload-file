import { Controller, Post, UseInterceptors, Request } from '@nestjs/common';
import {
  FilesInterceptor,
  StorageFile,
  UploadedFiles,
} from '@blazity/nest-file-fastify';
import * as fs from 'fs';
import * as stream from 'stream';
import { join } from 'path';
import { extension } from 'mime-types';

@Controller()
export class AppController {
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      dest: join(__dirname, '..', '/src/public/upload'),
    }),
  )
  async uploadFile(@UploadedFiles() files: Array<{ filename: string }>) {
    return files.map((file) => {
      return { url: '/upload/' + file.filename };
    });
  }
}
