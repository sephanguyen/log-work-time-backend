import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  @ApiModelProperty()
  firstName: string;

  @Column()
  @ApiModelProperty()
  description: string;

  @Column()
  @ApiModelProperty()
  lastName: string;

  @Column()
  @ApiModelProperty()
  age: number;
}
