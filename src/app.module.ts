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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
