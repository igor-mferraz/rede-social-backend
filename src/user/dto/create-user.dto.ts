export class CreateUserDto {
    slug: string;
    email: string;
    password: string;
    name: string;
    avatar: string;
    cover: string;
    bio?: string;
    link?: string;
}
