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
        console.log('developer old salary' + _this.salary);
        _this.salary = _this.salary + (_this.salary / 5);
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
        console.log('manager old salary' + _this.salary);
        _this.salary = _this.salary + ((_this.salary / 100) * 30);
        return _this;
    }
    return Manager;
}(Employee));
var employment = new Employee("vignesh", 24, 20000, "BE");
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
