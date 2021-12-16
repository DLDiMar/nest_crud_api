export class TvShow {
  constructor(
    public id: string,
    public tv_show_name: string,
    public air_date: string,
    public number_seasons: number,
    public number_episodes: number,
    public spotify_url: string,
  ) {}
}
