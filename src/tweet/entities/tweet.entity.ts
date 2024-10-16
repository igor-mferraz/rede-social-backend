import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tweet'})
export class Tweet {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'body', nullable: false})
    body:string;

    @Column({name: 'image'})
    image:string;

    @ManyToOne(() => User, user => user.tweets)
    user: User;
}
