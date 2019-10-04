import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `
          <main class="container">
            <header class="row"> <h2 class="col__12 m-y-6">{{title}}</h2></header>
            <section class="row">
             <customer class = "card col__3 " *ngFor = 'let customer of customers' [value] = customer>
              </customer>
            </section> 
          </main>                   
        `,
  styleUrls: ['../app.component.scss']
})
export class CustomerListComponent {
  title = 'Customers';
  customers:Array<object>

//     customersList = [
//     {
//              "id": 1,
//              "name": "sahil chhabra",
//              "phone": 9136191860,
//              "email": "sahilchhabra019@gmail.com",
//              "profilePicture": "../assets/images/customer/customer1.png",
//              "address":
//              {
//                  "houseNumber": "216 A",
//                  "society": "Green Fields Apartment",
//                  "street": "Zakir Hussain Marg",
//                  "city": "Faridabad",
//                  "state": "Haryana",
//                  "country": "India"
//              }
//          } ,

//          {
//             "id": 2,
//             "name": "Ram sharma",
//             "phone": 9718605999,
//             "email": "ram121@gmail.com",
//             "profilePicture": "../assets/images/customer/customer3.png",
//             "address":
//             {
//                 "houseNumber": "215 B",
//                 "society": "Valley Apartment",
//                 "street": "Gandhi Marg",
//                 "city": "New Delhi",
//                 "state": "Delhi",
//                 "country": "India"
//             }
//         } ,

//         {
//             "id": 3,
//             "name": "Pankaj Tiwari",
//             "phone": 9999101078,
//             "email": "pankaj@gmail.com",
//             "profilePicture": "../assets/images/customer/customer1.png",
//             "address":
//             {
//                 "houseNumber": "222",
//                 "society": "Worldview society",
//                 "street": "Andrew Road",
//                 "city": "New Delhi",
//                 "state": "Delhi",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 4,
//             "name": "Abdul Sheikh",
//             "phone": 8047192860,
//             "email": "abdul019@yahoo.in",
//             "profilePicture": "../assets/images/customer/customer3.png",
//             "address":
//             {
//                 "houseNumber": "1930-1",
//                 "society": "Tara Apartment",
//                 "street": "Mandir Road Kalkaji",
//                 "city": "New Delhi",
//                 "state": "Delhi",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 5,
//             "name": "Palvi Dhawan",
//             "phone": 9719760383,
//             "email": "dhawan901@gmail.com",
//             "profilePicture": "../assets/images/customer/customer2.png",
//             "address":
//             {
//                 "houseNumber": "2350",
//                 "society": "Gateway Society",
//                 "street": "Sector 18",
//                 "city": "Chandigarh",
//                 "state": "Haryana",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 6,
//             "name": "Sangeeta Paswan",
//             "phone": 8067524422,
//             "email": "sangeeta018@gmail.in",
//             "profilePicture": "../assets/images/customer/customer4.png",
//             "address":
//             {
//                 "houseNumber": "2350",
//                 "society": "Gateway Society",
//                 "street": "Sector 18",
//                 "city": "Chandigarh",
//                 "state": "Haryana",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 7,
//             "name": "Tarun CHaudhary",
//             "phone": 8067524423,
//             "email": "tarunch@gmail.in",
//             "profilePicture": "../assets/images/customer/customer3.png",
//             "address":
//             {
//                 "houseNumber": "111",
//                 "society": "Gokul Dham",
//                 "street": "Navi Mumbai",
//                 "city": "Mumbai",
//                 "state": "Maharastra",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 8,
//             "name": "Sagar Rana",
//             "phone": 9999911788,
//             "email": "sagar@gmail.in",
//             "profilePicture": "../assets/images/customer/customer1.png",
//             "address":
//             {
//                 "houseNumber": "189-B",
//                 "society": "Paras apartment",
//                 "street": "Sohna Road",
//                 "city": "Gurugram",
//                 "state": "Harayana",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 9,
//             "name": "Shubham Jawla",
//             "phone": 9718059897,
//             "email": "jawla010@gmail.in",
//             "profilePicture": "../assets/images/customer/customer3.png",
//             "address":
//             {
//                 "houseNumber": "187-A",
//                 "society": "Jyoti Villa",
//                 "street": "MG Road",
//                 "city": "Gurugram",
//                 "state": "Harayana",
//                 "country": "India"
//             }
//         },

//         {
//             "id": 10,
//             "name": "Ritesh Tyagi",
//             "phone": 9736772982,
//             "email": "tyagi912@gmail.in",
//             "profilePicture": "../assets/images/customer/customer1.png",
//             "address":
//             {
//                 "houseNumber": "121-A",
//                 "society": "villas Apartment",
//                 "street": "Sector 9",
//                 "city": "New Delhi",
//                 "state": "Delhi",
//                 "country": "India"
//             }
//         }
// ]

constructor(){
    fetch("http://localhost:8000/api/customers")
    .then(response=>response.json())
    .then(customer=>{
        this.customers = customer;
        console.log(customer);
    })
    .catch(err=>{
        console.log(err);
    })
}
  } 


