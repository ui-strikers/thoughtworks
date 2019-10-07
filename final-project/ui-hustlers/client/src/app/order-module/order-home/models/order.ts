
import { Products } from './products';

//model representing customer entity
export class Order {
    
	constructor(
		private orderId:number,
		private customerId:number,
		private orderDate:string,
		private payStatus:string,
		private fulfillStatus:string,
        private email:string,
        private products:Products[]

	){}
}