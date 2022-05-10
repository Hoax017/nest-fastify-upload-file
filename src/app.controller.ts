import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor, UploadedFiles } from '@blazity/nest-file-fastify';
import { join } from 'path';

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
