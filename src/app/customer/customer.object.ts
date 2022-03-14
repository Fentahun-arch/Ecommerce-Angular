export class Customer{
    id: number;
    name: string;
    imageUrl: string;
    gender: String;
    email: String;


    constructor(){
        this.id = 0;
        this.name = '';
        this.imageUrl = '';
        this.gender = '';
        this.email = '';
 }  

 
}
export const CUSTOMERS: Customer[ ] = [
{ id: 1, name: 'Ab', imageUrl: 'data:image/jpeg;base64,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', gender: 'Male', email: 'gf.yu@gmail.com'},
{ id: 2, name: 'GC', imageUrl: 'https://img.freepik.com/free-photo/portrait-excited-businessman-dressed-suit_171337-150.jpg?size=626&ext=jpg', gender: 'Male', email: 'uyu.yaw7@gmail.com'},
{ id: 3, name: 'Kd', imageUrl: 'https://img.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg?size=626&ext=jpg', gender: 'Female', email: 'pl.ffgg@gmail.com'}
];