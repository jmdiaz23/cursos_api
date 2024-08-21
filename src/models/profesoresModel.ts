import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Profesor{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dni: String
    
    @Column()
    nombre: String
    
    @Column()
    apellido: String

    @Column()
    email: String

    @Column()
    profesion: String

    @Column()
    telefono: String

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}