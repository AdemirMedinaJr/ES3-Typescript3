import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Discipline from './Discipline';
import Lesson from './Lesson'
import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50, { message: 'O tamanho máximo do nome é de 50 caracteres' })
  @MinLength(3, { message: 'O tamanho mímino do nome é de 3 caracteres' })
  name: string;

  @Column()
  @Max(99999, { message: 'A maior chave deve ser 99999'})
  @Min(10000, { message: 'A menor chave deve ser 10000'})
  key: number;

  @Column()
  @IsEmail() 
  email: string;

  // Relação feita somente em uma ponta
  @ManyToMany(type => Discipline)
  @JoinTable()
  disciplines: Discipline;

  // Relação feita somente em uma ponta
  @ManyToMany(type => Lesson)
  @JoinTable()
  lessons: Lesson;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
