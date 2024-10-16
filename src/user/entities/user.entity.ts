import { Tweet } from "src/tweet/entities/tweet.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column({name: 'avatar', nullable: true })
    avatar:string;
    
    @Column({name: 'cover', nullable: true })
    cover:string;
    
    @Column({name: 'bio', nullable: true })
    bio?:string;
    
    @Column({name: 'link', nullable: true })
    link?:string

    @OneToMany(() => Tweet, tweet => tweet.user)
    tweets: Tweet[];

}
