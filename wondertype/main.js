// 1)difference b/w call constructor & display
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var demo = /** @class */ (function () {
    function demo() {
        console.log('hi this is demo');
    }
    demo.prototype.diplay = function () {
        console.log('hi');
    };
    return demo;
}());
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
var Emp = /** @class */ (function () {
    function Emp(name, age) {
        console.log("Name : " + name);
        console.log("Age : " + age);
    }
    Emp.prototype.display = function () {
        console.log("Hi Just Demo  from Method ");
    };
    return Emp;
}());
var e = new Emp("Ramu", 25);
// 3) data passing use this keyword
var Em = /** @class */ (function () {
    function Em(name, age, salary, home, company) {
        this.myName = name;
        this.myAge = age;
        this.mySalary = salary;
        this.myHome = home;
        this.myCompany = company;
    }
    Em.prototype.display = function () {
        console.log("Hi Just Demo  from Method ");
        console.log("Name : " + this.myName);
        console.log("Age : " + this.myAge);
        console.log("Age : " + this.mySalary);
        console.log("Age : " + this.myHome);
        console.log("Age : " + this.myCompany);
    };
    return Em;
}());
var g = new Em("madasamy", 25, 20000, 'sppuram', 'wondersoft');
g.display();
g.display();
g.display();
g.display();
// 4)multiple classes but each are independent to each
var employe = /** @class */ (function () {
    function employe() {
        var b = 'hello';
        this.myData = b;
        console.log('this is a employe');
        console.log(this.myname);
        console.log(this.myage);
    }
    employe.prototype.myOwnfn = function () {
        console.log('employe own');
        console.log('employe MyOwnfn' + this.myData);
    };
    return employe;
}());
var developer = /** @class */ (function () {
    function developer() {
        console.log('this is a developer');
    }
    developer.prototype.myOwnfn = function () {
        console.log('developer own');
    };
    return developer;
}());
var tester = /** @class */ (function () {
    function tester() {
        console.log('this is a tester');
    }
    tester.prototype.myOwnfn = function () {
        console.log('tester own');
    };
    return tester;
}());
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
function abcd() {
    console.log("Hi My Function ");
}
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.display = function () {
        console.log("Hi Method ");
    };
    return Demo2;
}());
var dd = new Demo2();
dd.display();
abcd();
// use norml class
var Seetha = /** @class */ (function () {
    function Seetha(a, b, c, d) {
        this.name = a;
        this.age = b;
        this.salary = c;
        this.desig = d;
    }
    Seetha.prototype.display = function () {
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
        console.log("Saary  : " + this.salary);
        console.log("Desig : " + this.desig);
    };
    return Seetha;
}());
var s = new Seetha("Seetha", 25, 50000, "tester");
s.display();
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
var Employer = /** @class */ (function () {
    function Employer(name, age, salary, designation) {
        console.log('My name is' + ':' + name + ',' + ' My age is' + ':' + age + ',' + ' My salary is' + ':' + salary + ',' + ' My designatio is' + ':' + designation);
    }
    return Employer;
}());
var Deve = /** @class */ (function () {
    function Deve(name, age, salary, designation) {
    }
    return Deve;
}());
var test = /** @class */ (function () {
    function test(name, age, salary, designation) {
    }
    return test;
}());
var Cleark = /** @class */ (function () {
    function Cleark(name, age, salary, designation) {
    }
    return Cleark;
}());
var em = new Employer('madasamy', 24, 20000, 'developer');
var em = new Deve('madasamy', 24, 20000, 'developer');
var em = new test('madasamy', 24, 20000, 'developer');
var em = new Cleark('madasamy', 24, 20000, 'developer');
// single super with multiple parent class
var Employee = /** @class */ (function () {
    function Employee(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    Employee.prototype.display = function () {
        console.log("name : " + this.name);
        console.log("age : " + this.age);
        console.log("salary : " + this.salary);
        console.log("desigation : " + this.designation);
    };
    return Employee;
}());
var Dev1 = /** @class */ (function (_super) {
    __extends(Dev1, _super);
    function Dev1(name, age, salary, designation) {
        var _this = _super.call(this, name, age, salary, designation) || this;
        console.log('tester old salary' + _this.salary);
        // this.salary = this.salary+(this.salary/5)
        _this.salary = _super.prototype.salary / 5;
        return _this;
    }
    return Dev1;
}(Employee));
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(name, age, salary, designation) {
        var _this = _super.call(this, name, age, salary, designation) || this;
        console.log('tester old salary' + _this.salary);
        _this.salary = _this.salary + (_this.salary / 10);
        return _this;
    }
    return Tester;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary, designation) {
        var _this = _super.call(this, name, age, salary, designation) || this;
        console.log('tester old salary' + _this.salary);
        _this.salary = _this.salary + ((_this.salary / 100) * 30);
        return _this;
    }
    return Manager;
}(Employee));
var employment = new Employee("vignesh", 24, 80000, "BE");
employment.display();
console.log("Hi Devloper................. ");
var deve = new Dev1("Danu", 24, 20000, "BE");
deve.display();
console.log("Hi Tester....................... ");
var t = new Tester("Thanesh", 24, 20000, "BE");
t.display();
console.log("Hi Manager ..... /\................");
var m = new Manager("Manoj", 24, 20000, "BE");
m.display();
