import { ROLES } from './roles.enum';

export class User {
    username = '';
    email = '';
    password = '';
    confirm = '';
    role = ROLES.USER

    constructor(username, email, password, confirm, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
        this.role = role;
    }


}