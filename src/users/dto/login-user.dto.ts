import { User } from "../entities/user.entity";

export class LoginUserDto extends User {
    readonly email: string;
    readonly password: string;
}
