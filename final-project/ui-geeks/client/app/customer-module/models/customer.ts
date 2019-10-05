import { Address } from './address';

//model representing customer entity
export class Customer{

	constructor(
		private id:number, 
		private firstName:string, 
		private lastName:string, 
		private gender:string,
		private phone:number,
		private email:string,
		private address:Address
	){}

}