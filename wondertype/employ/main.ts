class Employee {
    name;
    age;salary;designation
    constructor(name:string,age:number,salary:number,designation:string){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    display(){
        console.log("name : " +this.name);
        console.log("age : " +this.age);
        console.log("salary : " +this.salary);
        console.log("desigation : " +this.designation);
    }

}

class Dev1  extends Employee{
   
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
        console.log('developer old salary'+this.salary);
        this.salary = this.salary+(this.salary/5)

    }
}
class Tester   extends Employee{
   
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
        console.log('tester old salary'+this.salary);
        this.salary = this.salary+(this.salary/10)
      
    }
}
class Manager  extends Employee {
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
        console.log('manager old salary'+this.salary);
        this.salary = this.salary+((this.salary/100)*30)
    }
}



var employment = new Employee("vignesh",24,20000,"BE");
employment.display();

console.log("Hi Devloper................. ")

var deve = new Dev1("Danu",24,20000,"BE");
deve.display();


console.log("Hi Tester....................... ")

var t = new Tester("Thanesh",24,20000,"BE");
t.display();

console.log("Hi Manager ..... /\................")

var m = new Manager("Manoj",24,20000,"BE");
m.display();
