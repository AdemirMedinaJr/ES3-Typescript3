import { Column, Entity } from 'typeorm';
import Institution from './Institution';
//import Identifier from './Identifier';

@Entity('college')
// herdará tudo que existir em Institution
export default class College extends Institution {

    @Column()
    graduations: string;

}