// 构造函数相关 经过babel后这边的b和saybye函数都会转换成前面带this.作为new一个对象时候就有的属性和方法
class A{
  constructor(){
    this.a='123';
    this.sayHello=()=>{console.log('hello');}
  }
  b = '321';
  sayBye=()=>{console.log('bye');}
}

let a = new A();
console.log(a.a);
console.log(a.sayHello());
console.log(a.b);
console.log(a.sayBye());
