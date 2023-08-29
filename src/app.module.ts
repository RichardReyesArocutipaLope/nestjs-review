import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(
      'mongodb+srv://user_node_cafe:N84c5b8M6yTJIkNb@cluster0.9dsd3vl.mongodb.net/',
    ),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
