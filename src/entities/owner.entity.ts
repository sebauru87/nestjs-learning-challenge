import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Dog } from './dog.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: false,
  })
  lastName: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  phone: string;

  @OneToMany(() => Dog, (dog) => dog.owner)
  dogs: Dog[];
}
