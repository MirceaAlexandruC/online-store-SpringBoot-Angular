import { Role } from "../enum/Role";

export class User{
    name: string;
    email:string;
    password: string;
    phone: string;
    address: string;
    role: string;
    active: boolean;

    constructor(){
        this.active = true;
        this.role = Role.Customer;
    }
}