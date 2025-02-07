// singleton

//objects Literals

const JsUser = {
    name: "siddhartha",
    Age: 18,
    location: "Bhubaneswar",
    email: "siddhartharout11@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
console.log(JsUser["email"]);

// const tinderUser = new Object()
 //this was a singleton object
 const tinderUser = {}
 // this was a non singleton object
 
  tinderUser.id = "123abc"
  tinderUser.name = "rohit"
  tinderUser.isLoggedIn = false
  tinderUser.lastLoginDays = ["sunday", "monday"]
 
 // console.log(tinderUser);
 
 
 const regularUser = { 
     email: "sid@gmail.com",
     fullname: {
         userfullname: {
             firstname: "siddhartha",
             lastname: "rout"
         }
     }
 }
 
 // console.log(regularUser.fullname?.userfullname.firstname);
 
 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "c", 6: "d"}
 
 // const obj3 = { obj1, obj2 }
 
 // const obj3 = Object.assign({},obj1, obj2, obj4)
 //{}-this was target, obj1,obj2,obj3-this was source
 
 const obj3 = {...obj1.obj1, ...obj2}
 // console.log(obj3);
 
 const users =  [
     {
         id: 1,
         email: "s@gmail.com"
     },
     {
         id: 1,
         email: "s@gmail.com"
     },
     {
         id: 1,
         email: "s@gmail.com"
     },
 ]
 
 users[1].email
 // console.log(tinderUser);
 
 
 // console.log(Object.keys(tinderUser));
 // console.log(Object.values(tinderUser));
 // console.log(Object.entries(tinderUser));
 // console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 // console.log(tinderUser.hasOwnProperty('isLogged'));
 
 
 const course = {
     coursename: "js in odia",
     price: "999",
     courseInstructor: "siddhartha"
 }
 
 // course.courseInstructor
 
 const {courseInstructor: h1} = course
 
 console.log(h1);
 
 
 
 // {
 //     "name": "siddhatha",
 //     "coursename": "js in odia",
 //     "price": "free"
 // }
 
 [
     {},
     {},
     {}
 ]