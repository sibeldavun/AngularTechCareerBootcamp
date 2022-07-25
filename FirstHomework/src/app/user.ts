export class User {
    public Name: string;
    public Surname: string;
    public Username: string;
    public Password: string;
    
    
    constructor(name: string,
        surname: string,
        username: string,
        password: string) {
        this.Name = name;
        this.Surname = surname;
        this.Username = username;
        this.Password = password;
    }

}
