export class Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = '';
        this.imageUrl = '';
        this.description = '';
    }
}
export const PRODUCTS:Product[] = [
 { id: 1, name: 'Nike', imageUrl: 'https://static.nike.com/a/images/w_1920,c_limit/e1b8d7af-a840-44bb-a9e9-99fa38c5d0db/the-best-nike-shoes-to-look-taller.jpg',price:'$200',description:"Some quick example text to build on the card title and make up the bulk of the card's content"},
 { id: 2, name: 'Fila', imageUrl: 'https://static.nike.com/a/images/w_1920,c_limit/e1b8d7af-a840-44bb-a9e9-99fa38c5d0db/the-best-nike-shoes-to-look-taller.jpg',price:'$200',description:"Some quick example text to build on the card title and make up the bulk of the card's content"},
 { id: 3, name: 'Adidas', imageUrl: 'https://static.nike.com/a/images/w_1920,c_limit/e1b8d7af-a840-44bb-a9e9-99fa38c5d0db/the-best-nike-shoes-to-look-taller.jpg',price:'$200',description:"Some quick example text to build on the card title and make up the bulk of the card's content"},
 { id: 4, name: 'Puma', imageUrl: 'https://static.nike.com/a/images/w_1920,c_limit/e1b8d7af-a840-44bb-a9e9-99fa38c5d0db/the-best-nike-shoes-to-look-taller.jpg',price:'$200',description:"Some quick example text to build on the card title and make up the bulk of the card's content"},
{ id: 5, name: 'Alibaba', imageUrl: 'https://static.nike.com/a/images/w_1920,c_limit/e1b8d7af-a840-44bb-a9e9-99fa38c5d0db/the-best-nike-shoes-to-look-taller.jpg', price: '$200', description: "Some quick example text to build on the card title and make up the bulk of the card's content" },


];