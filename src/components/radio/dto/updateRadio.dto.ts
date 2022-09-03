import { PartialType } from '@nestjs/swagger';
import { CreateRadioDto } from './createRadio.dto';

export class UpdateRadioDto extends PartialType(CreateRadioDto) {}
