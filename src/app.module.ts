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
import { PvcProfilesModule } from './pvc-profiles/pvc-profiles.module';
import { AluProfilesModule } from './alu-profiles/alu-profiles.module';
import { AluSettingsModule } from './alu-settings/alu-settings.module';
import { ReportsModule } from './reports/reports.module';
import { SupportedProfilesModule } from './supported-profiles/supported-profiles.module';
import { ExtrasModule } from './extras/extras.module';
import { EmployeesModule } from './employees/employees.module';
import { AluFillsModule } from './alu-fills/alu-fills.module';
import { AluHandleProfilesModule } from './alu-handle-profiles/alu-handle-profiles.module';
import { AluLiftSupportsModule } from './alu-lift-supports/alu-lift-supports.module';
import { AluFrameTreatmentsModule } from './alu-frame-treatments/alu-frame-treatments.module';
import { AluHingesModule } from './alu-hinges/alu-hinges.module';
import { DepartmentsModule } from './departments/departments.module';
import { AluHingeTypeModule } from './alu-hinge-type/alu-hinge-type.module';
import { FilesModule } from './files/files.module';

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
    PvcProfilesModule,
    AluProfilesModule,
    AluSettingsModule,
    ReportsModule,
    SupportedProfilesModule,
    ExtrasModule,
    EmployeesModule,
    AluFillsModule,
    AluHandleProfilesModule,
    AluLiftSupportsModule,
    AluFrameTreatmentsModule,
    AluHingesModule,
    DepartmentsModule,
    AluHingeTypeModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
