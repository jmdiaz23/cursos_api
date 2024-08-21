import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Curso{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: String

    @Column('text')
    descripcion: String

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}