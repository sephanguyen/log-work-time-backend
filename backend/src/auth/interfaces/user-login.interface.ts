import { ApiModelProperty } from '@nestjs/swagger';

export class UserLogin {
  @ApiModelProperty()
  userName: string;
  @ApiModelProperty()
  password: string;
}
