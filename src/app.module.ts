import { Module } from '@nestjs/common';
//import { join } from 'path/posix';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    TvShowsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
