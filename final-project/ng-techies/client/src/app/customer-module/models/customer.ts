import { Address } from './address';

export class Customer {

	constructor(
		private id: number,
		private firstName: string,
		private lastName: string,
		private phone: string,
		private email: string,
		private address: Address
	) { }

}