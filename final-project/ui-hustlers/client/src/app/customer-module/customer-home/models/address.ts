//model representing customer address
export class Address {
	constructor(
		private houseNo:string,
		private society:string,
		private street:string,
		private city:string,
		private state:string,
		private country:string
	){}
}