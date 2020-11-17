import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  // SuperClasse
  // @Entity('university') - classe abstrata, ficará invisível para o BD
  export default abstract class School {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
    
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  
  
  
  
  
  }
  