/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  @Get('api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    return ARTICLES.find((article) => article._id === id);
  }
}
