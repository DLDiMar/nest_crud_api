import {
  Controller,
  Body,
  Param,
  Get,
  Patch,
  Delete,
  Post,
} from '@nestjs/common';
import { TvShowsService } from './tv-shows.service';

@Controller('tv-shows')
export class TvShowsController {
  constructor(private readonly tvShowService: TvShowsService) {}

  @Post()
  addTvShow(
    @Body('tv_show_name') tvShowName: string,
    @Body('air_date') tvShowAirDate: string,
    @Body('number_seasons') tvShowNumSeasons: number,
    @Body('number_episodes') tvShowNumEpisodes: number,
    @Body('spotify_url') tvShowSpotify: string,
  ) {
    const generatedId = this.tvShowService.insertTvShow(
      tvShowName,
      tvShowAirDate,
      tvShowNumSeasons,
      tvShowNumEpisodes,
      tvShowSpotify,
    );
    return { id: generatedId };
  }

  @Get()
  getAllTvShows() {
    return this.tvShowService.getTvShows();
  }

  @Get(':id')
  getTvShow(@Param('id') tvShowId: string) {
    return this.tvShowService.getSingleTvShow(tvShowId);
  }

  @Patch(':id')
  updateTvShow(
    @Param('id') tvShowId: string,
    @Body('tv_show_name') tvShowName: string,
    @Body('air_date') tvShowAirDate: string,
    @Body('number_seasons') tvShowNumSeasons: number,
    @Body('number_episodes') tvShowNumEpisodes: number,
    @Body('spotify_url') tvShowSpotify: string,
  ) {
    this.tvShowService.updateTvShow(
      tvShowId,
      tvShowName,
      tvShowAirDate,
      tvShowNumSeasons,
      tvShowNumEpisodes,
      tvShowSpotify,
    );
    return null;
  }

  @Delete(':id')
  removeTvShow(@Param('id') tvShowId: string) {
    this.tvShowService.deleteTvShow(tvShowId);
    return null;
  }
}
