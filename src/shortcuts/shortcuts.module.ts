import { Module } from '@nestjs/common';
import { ShortcutsService } from './shortcuts.service';
import { ShortcutsController } from './shortcuts.controller';

@Module({
  controllers: [ShortcutsController],
  providers: [ShortcutsService]
})
export class ShortcutsModule {}
