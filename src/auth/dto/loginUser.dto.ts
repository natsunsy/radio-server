import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({})
  readonly _id: string;

  @ApiProperty({})
  readonly email: string;

  @ApiProperty({})
  readonly password: string;
}
