import { Product } from './product';

//model representing order entity
export class Order{

	constructor(
		private orderId:number, 
		private customerId:number, 
		private orderDate:string, 
		private payStatus:string,
		private fulfillStatus:boolean,
		private products:Product
	){}

}