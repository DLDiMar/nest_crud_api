import { Injectable, NotFoundException } from '@nestjs/common';
import { TvShow } from 'src/tv-shows.dto';

@Injectable()
export class TvShowsService {
  private tvShows: TvShow[] = [];

  private findTvShow(id: string): [TvShow, number] {
    const tvShowIndex = this.tvShows.findIndex((tv_show) => tv_show.id === id);
    const tvShowFound = this.tvShows[tvShowIndex];
    if (!tvShowFound) {
      throw new NotFoundException('Could not find TV Show.');
    }
    return [tvShowFound, tvShowIndex];
  }

  getTvShows() {
    return [...this.tvShows];
  }

  getSingleTvShow(tvShowId: string) {
    return { ...this.findTvShow(tvShowId)[0] };
  }

  insertTvShow(
    tv_show_name: string,
    air_date: string,
    number_seasons: number,
    number_episodes: number,
    spotify_url: string,
  ) {
    const showId = Math.floor(Math.random() * 10000).toString();
    const newTvShow = new TvShow(
      showId,
      tv_show_name,
      air_date,
      number_seasons,
      number_episodes,
      spotify_url,
    );
    this.tvShows.push(newTvShow);
    return showId;
  }

  updateTvShow(
    tvShowId: string,
    tv_show_name: string,
    air_date: string,
    number_seasons: number,
    number_episodes: number,
    spotify_url: string,
  ) {
    const [tvShow, index] = this.findTvShow(tvShowId);
    const updatedTvShow = { ...tvShow };
    if (tv_show_name) {
      updatedTvShow.tv_show_name = tv_show_name;
    }
    if (air_date) {
      updatedTvShow.air_date = air_date;
    }
    if (number_seasons) {
      updatedTvShow.number_seasons = number_seasons;
    }
    if (number_episodes) {
      updatedTvShow.number_episodes = number_episodes;
    }
    if (spotify_url) {
      updatedTvShow.spotify_url = spotify_url;
    }
    this.tvShows[index] = updatedTvShow;
  }

  deleteTvShow(tvShowId: string) {
    const index = this.findTvShow(tvShowId)[1];
    this.tvShows.splice(index, 1);
  }
}
