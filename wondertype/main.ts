// 1)difference b/w call constructor & display

class demo{
    constructor(){
        console.log('hi this is demo');
    }
    diplay(){
        console.log('hi')
    }
}
var d = new demo();
var d = new demo();
var d = new demo();
var d = new demo();
var d = new demo();
    d.diplay();
    d.diplay();
    d.diplay();
    d.diplay();
    d.diplay();

//  2)assign the aggument with date type in constructor

    class Emp {
        constructor(name:string,age:number){
             console.log("Name : "+name)
             console.log("Age : "+age)
         }
         display()
         {
             console.log("Hi Just Demo  from Method ")
         }
     }
     var e=new Emp("Ramu",25);


     // 3) data passing use this keyword

     class Em {
        myName;
        myAge; 
        mySalary; 
        myHome; 
        myCompany; 
       
       constructor(name:string,age:number,salary:number,home:string,company:string){
        this.myName=name;
        this.myAge=age;
        this.mySalary=salary;
        this.myHome=home;
        this.myCompany=company;
        }
        display()
        {
            console.log("Hi Just Demo  from Method ")
            console.log("Name : "+this.myName)
            console.log("Age : "+this.myAge)
            console.log("Age : "+this.mySalary)
            console.log("Age : "+this.myHome)
            console.log("Age : "+this.myCompany)
        }
    }
    var g=new Em("madasamy",25,20000,'sppuram','wondersoft');
    g.display();
    g.display();
    g.display();
    g.display();


    // 4)multiple classes but each are independent to each

    class employe{
        myname;
        myage;
        myData;
        constructor(){
            let b = 'hello';
            this.myData = b;
            console.log('this is a employe');
            console.log(this.myname);
            console.log(this.myage);
        }
        myOwnfn(){
            console.log('employe own');
            console.log('employe MyOwnfn'+this.myData);
            
        }
    }

    class developer{
        constructor(){
            console.log('this is a developer')
        }
        myOwnfn(){
            console.log('developer own');
            
        }
    }

    class tester{
        constructor(){
            console.log('this is a tester')
        }
        myOwnfn(){
            console.log('tester own');
            
        }
    }

    console.log('*****employe ******');
    var ee = new employe();
    ee.myOwnfn();

    console.log('*****developer ******');
    var ddd = new developer();
    ee.myOwnfn();

    console.log('*****tester******');
    var tt = new tester();
    ee.myOwnfn();


     




    // 5)proof for typescript support fuction and object
     function abcd(){
        console.log("Hi My Function ")
    }
    
    
    class Demo2{
        display()
        {
            console.log("Hi Method ")
        }
    }
    
    var dd=new Demo2();
    dd.display();
    
    abcd();






// use norml class

    class Seetha{
        salary ; desig;
        name;age
        constructor(a,b,c,d){
            this.name=a;
            this.age=b;
            this.salary=c;
            this.desig=d;
        }
        display(){
            console.log("Name : "+this.name)
            console.log("Age  : "+this.age)
            console.log("Saary  : "+this.salary)
            console.log("Desig : "+this.desig)
        }
    }
    var s=new Seetha("Seetha",25,50000,"tester");
    s.display()




//     Emp

// Test 
// Dev 
// CLerk 


// constructir 
//     name 
//     age 
//     salary 
//     designation 
    
// obj



    // use normal 4-class
    class Employer{
        constructor(name:string,age:number,salary:number,designation:string){
            console.log('My name is'+':'+name+','+' My age is'+':'+age+','+' My salary is'+':'+salary+','+' My designatio is'+':'+designation);
            

        }
    }
    class Deve{
        constructor(name,age,salary,designation){
        }
    }
    class test{
        constructor(name,age,salary,designation){

        }
    }
    class Cleark{
        constructor(name,age,salary,designation){
        }
    }
 
    var em = new Employer('madasamy',24,20000,'developer');
    var em = new Deve('madasamy',24,20000,'developer');
    var em = new test('madasamy',24,20000,'developer');
    var em = new Cleark('madasamy',24,20000,'developer');




// single super with multiple parent class
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
        console.log('tester old salary'+this.salary);
        // this.salary = this.salary+(this.salary/5)
        this.salary = super.salary/5;


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
        console.log('tester old salary'+this.salary);
        this.salary = this.salary+((this.salary/100)*30)
    }
}



var employment = new Employee("vignesh",24,80000,"BE");
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





    
    

    
     