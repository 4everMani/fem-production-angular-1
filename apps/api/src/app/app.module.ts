import { Module } from '@nestjs/common';
import { WidgetsController } from '../widgets/widgets.controller';
import { WidgetsModule } from '../widgets/widgets.module';
import { WidgetsService } from '../widgets/widgets.service';

// import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WidgetsModule],
  controllers: [WidgetsController],
  providers: [WidgetsService],
})
export class AppModule {}
