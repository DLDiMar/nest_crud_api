import { Module } from '@nestjs/common';
import { TvShowsController } from './tv-shows.controller';
import { TvShowsResolver } from './tv-shows.resolver';
import { TvShowsService } from './tv-shows.service';

@Module({
  controllers: [TvShowsController],
  providers: [TvShowsService, TvShowsResolver],
})
export class TvShowsModule {}
