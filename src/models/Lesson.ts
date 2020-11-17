import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Discipline from './Discipline';
import Content from './Content';
import Mark from './Mark';

@Entity()
export default class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content;

    @OneToOne(type => Mark, lesson => Lesson)
    mark: Mark;

    @ManyToOne(type => Discipline, lesson => Lesson, {eager: true})
    Disciplines: Discipline

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}