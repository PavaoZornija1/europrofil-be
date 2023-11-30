import { IsBoolean, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsOptional()
  public customerName: string;

  @IsOptional()
  public doors: any;

  @IsOptional()
  public customerEmail: string;

  @IsOptional()
  public extraElements: string[];

  @IsOptional()
  public customerPhone: string;

  @IsOptional()
  public customerAddress: string;

  @IsOptional()
  public customerDeliveryAddress: string;

  @IsOptional()
  public customerDesiredDeliveryDate: string;

  @IsOptional()
  public customerDiscountFrame: number;

  @IsOptional()
  public customerDiscountFills: number;

  @IsBoolean()
  public customerShowPriceBreakdown: boolean;

  @IsBoolean()
  @IsOptional()
  public customerLockedDiscounts: boolean;

  @IsOptional()
  public customerOwnOrderNumber: string;

  @IsOptional()
  public notes: string;

  @IsOptional()
  public givenOrderNumber: string;

  @IsOptional()
  public mechanism: string;

  @IsOptional()
  public handrail: string;

  @IsOptional()
  public handrailDecoration: string;

  @IsOptional()
  public supportedDecoration: string;

  @IsOptional()
  public handrailEnding: string;

  @IsOptional()
  public pvcProfile: string;

  @IsOptional()
  public handrailEndingChild: string;

  @IsOptional()
  public handrailDecorationCustomColor: string;

  @IsOptional()
  public horizontalProfile: string;

  @IsOptional()
  public openingHeight: number;

  @IsOptional()
  public openingWidth: number;

  @IsOptional()
  public openingDoors: number;

  @IsOptional()
  public railsType: string;

  @IsOptional()
  public railsLengthTopValue: number;

  @IsOptional()
  @IsBoolean()
  public railsLengthTopManual: boolean;

  @IsOptional()
  public railsLengthBottomValue: number;

  @IsOptional()
  @IsBoolean()
  public railsLengthBottomManual: boolean;

  @IsOptional()
  public handrailHeight: number;

  @IsOptional()
  public totalDeceleratorPairs: number;

  @IsOptional()
  public finalPrice: number;

  @IsOptional()
  public servicesFrameName: string;

  @IsOptional()
  public servicesFrameChosen: boolean;

  @IsOptional()
  public servicesFillName: string;

  @IsOptional()
  public servicesFillChosen: boolean;

  @IsOptional()
  public servicesConfectionName: string;

  @IsOptional()
  public servicesConfectionChosen: boolean;

  @IsOptional()
  public servicesInstallationName: string;

  @IsOptional()
  public servicesInstallationChosen: boolean;
}
