import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
   id: number;

  @Column()
    name: string;

  @Column()
    breed: string;

  @Column()
    lbsFoodPerDay: number;

  @Column()
    lives: number;

  @Column({ default: false })
    isAlive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  isCatDead() {
    if (this.lives > 0) {
      this.isAlive = true;
    } else {
      this.isAlive = false;
    }
  }
}
