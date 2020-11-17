import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Lesson from './Lesson';
import { MaxLength, MinLength } from 'class-validator';

@Entity()
export default class Mark {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(20, { message: 'Devem ser utilizados no máximo 15 caracteres'})
  @MinLength(3, { message: 'Devem ser utilizados no mínimo 3 caracteres'})
  description: string;

  @Column()
  @MaxLength(50, { message: 'Devem ser utilizados no máximo 15 caracteres'})
  @MinLength(3, { message: 'Devem ser utilizados no mínimo 3 caracteres'})
  student: string;

  @OneToOne(type => Lesson, mark => Mark)
  @JoinColumn()
  lesson: Lesson;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
