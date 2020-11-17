import { Column, Entity } from 'typeorm';
import Institution from './Institution';
//import Identifier from './Identifier';


@Entity('university')
// herdará tudo que existir em Institution
export default class University extends Institution {

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;

}