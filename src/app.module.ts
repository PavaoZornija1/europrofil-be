import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MechanismsModule } from './mechanisms/mechanisms.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { HandrailsModule } from './handrails/handrails.module';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SettingsModule } from './settings/settings.module';
import { ShortcutsModule } from './shortcuts/shortcuts.module';
import { OrdersModule } from './orders/orders.module';
import { HorizontalProfilesModule } from './horizontal-profiles/horizontal-profiles.module';
import { DoorMechanismsModule } from './door-mechanisms/door-mechanisms.module';
import { HandrailEndingsModule } from './handrail-endings/handrail-endings.module';
import { HandrailDecorationsModule } from './handrail-decorations/handrail-decorations.module';
import { SupportedDecorationsModule } from './supported-decorations/supported-decorations.module';
import { FillsModule } from './fills/fills.module';
import { FoilsModule } from './foils/foils.module';

@Module({
  imports: [
    MechanismsModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
    HandrailsModule,
    CustomersModule,
    UsersModule,
    ProfilesModule,
    SettingsModule,
    ShortcutsModule,
    OrdersModule,
    HorizontalProfilesModule,
    DoorMechanismsModule,
    HandrailEndingsModule,
    HandrailDecorationsModule,
    SupportedDecorationsModule,
    FillsModule,
    FoilsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
