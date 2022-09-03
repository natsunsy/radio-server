import { ApiProperty } from '@nestjs/swagger';

export class CreateRadioDto {
  @ApiProperty({})
  readonly name: string;

  @ApiProperty({})
  readonly logo: string;

  @ApiProperty({})
  readonly description: string;

  @ApiProperty({})
  readonly slogan: string;

  @ApiProperty({})
  readonly URLstreaming: string;
}
