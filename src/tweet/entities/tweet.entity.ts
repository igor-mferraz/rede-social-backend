import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tweet'})
export class Tweet {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'body', nullable: false})
    body:string;

    @Column({name: 'image'})
    image:string;

    @Column({name: 'idUser', nullable: false})
    idUser: number;   
}
