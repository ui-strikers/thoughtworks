//model representing customer's address

export class Address{

	constructor(
		private houseNo:number, 
		private society:string, 
		private street:string, 
		private city:number,
		private state:string,
		private country:string
	){}

}