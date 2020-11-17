import { Column, Entity } from 'typeorm';
import School from './School';
//import Identifier from './Identifier';


@Entity('classSchedule')
// herdará tudo que existir em Institution
export default class ClassSchedule extends School {

    @Column()
    room: string;

    @Column()
    teacher: string;

    @Column()
    lesson: string;

}