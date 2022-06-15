import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    type: string;

  @Column({ nullable: true })
    message: string;

  @Column({ type: 'timestamp with time zone' })
    received: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
    processed: Date;

  @Column({ nullable: true })
    error: string;

  @Column({ default: false })
    isActive: boolean;
}
