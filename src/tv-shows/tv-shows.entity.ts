import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TvShow {
  @Field()
  id: string;
  @Field()
  tv_show_name: string;
  @Field()
  air_date: string;
  @Field()
  number_seasons: number;
  @Field()
  number_episodes: number;
  @Field()
  spotify_url: string;
}
