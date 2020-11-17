import { Column, Entity } from 'typeorm';
import School from './School';
//import Identifier from './Identifier';


@Entity('employees')
// herdará tudo que existir em Institution
export default class Employees extends School {

    @Column()
    cleaners: string;

    @Column()
    teachers: string;

    @Column()
    principal: string;

}