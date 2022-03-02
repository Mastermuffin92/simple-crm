export class User{
    firstName:string;
    lastName:string;
    birthDate: number;
    street: string;
    zipcode: number;
    city:string;
    
    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : "";
        this.lastName = obj ? obj.lastName : "";
        this.birthDate = obj ? obj.birthDate : "";
        this.street = obj ? obj.street : "";
        this.zipcode = obj ? obj.zipcode : "";
        this.city = obj ? obj.city : "";
    }
}