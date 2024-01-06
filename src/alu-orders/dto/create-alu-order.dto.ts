import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAluOrderDto {
  @IsOptional()
  codeYear: number;
  @IsOptional()
  codeNumber: number;
  @IsOptional()
  code: string;

  @IsOptional()
  customerDesiredDeliveryDate: string | Date;
  @IsOptional()
  customerDeliveryAddress: string;
  @IsOptional()
  customerAddress: string;
  @IsOptional()
  customerPhone: string;
  @IsOptional()
  codeMonth: number;
  @IsOptional()
  frameTreatmentPrice: number;
  @IsOptional()
  frameTreatmentName: string;
  @IsOptional()
  frameTreatmentCode: string;
  @IsOptional()
  frameTypeName: string;
  @IsOptional()
  frameTypeCode: string;
  @IsOptional()
  customerInternalOrderNumber: string;
  @IsOptional()
  customerNotes: string;
  @IsOptional()
  customerDiscount: number;
  @IsOptional()
  fillPriceIncrease: number;
  @IsOptional()
  fillPrice: number;
  @IsOptional()
  fillName: string;
  @IsOptional()
  fillCode: string;
  @IsOptional()
  frameTreatmentPriceIncrease: number;
  @IsOptional()
  cornerCoverProductCode: string;
  @IsOptional()
  confirmedOn: any;
  @IsOptional()
  confirmed: any;
  @IsOptional()
  jsonCost: any;
  @IsOptional()
  jsonFronts: any;
  @IsOptional()
  jsonHeader: any;
  @IsOptional()
  jsonOrder: any;
  @IsOptional()
  jsonConfiguration: any;
  @IsOptional()
  orderDate: string | Date;
  @IsOptional()
  totalFillArea: number;
  @IsOptional()
  totalFrameLength: number;
  @IsOptional()
  totalFrameCount: number;
  @IsOptional()
  costPerMeterTotal: number;
  @IsOptional()
  costPerMeterBase: number;
  @IsOptional()
  costTotal: number;

  @IsOptional()
  costVat: number;
  @IsOptional()
  costBase: number;
  @IsOptional()
  costVatRate: number;
  @IsOptional()
  cornerCoverCount: number;
  @IsOptional()
  additionallFillTreatment: any;
  @IsOptional()
  fill: any;
  @IsOptional()
  frameType: any;
  @IsOptional()
  treatment: any;
  @IsOptional()
  user: any;
}
