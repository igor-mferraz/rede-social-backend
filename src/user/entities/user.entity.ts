import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'slug', nullable: false})
    slug:string;
    
    @Column({name: 'email', nullable: false})
    email:string;
    
    @Column({name: 'password', nullable: false})
    password:string;
    
    @Column({name: 'name', nullable: false})
    name:string;
    
    @Column({name: 'avatar'})
    avatar:string;
    
    @Column({name: 'cover'})
    cover:string;
    
    @Column({name: 'bio'})
    bio?:string;
    
    @Column({name: 'link'})
    link?:string

    @Column({name: 'teste'})
    teste?:string

}
