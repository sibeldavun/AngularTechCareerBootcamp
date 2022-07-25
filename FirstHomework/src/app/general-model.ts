import { User } from "./user";

export class GeneralModel {
    Users: User[]
    
    constructor() {
        this.Users = [
            new User("Sibel","Davun","sibeldavun.96@gmail.com","123456"),
        ]
    }
}
