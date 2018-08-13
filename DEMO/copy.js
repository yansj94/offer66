// js深拷贝和浅拷贝  浅拷贝还可以用object.assign(target,...source)，浅拷贝还可以用{...obj}
function copy(obj){
  let objClone = {};
  for( let i in obj){
    if(obj.hasOwnProperty(i)){ // 不拷贝原型链上的属性和方法
      objClone[i]=obj[i];
    }
  }
  return objClone;
}

class obj{
  constructor(){
    this.name='asdf';
    this.sayhello=()=>{console.log(this.name)}
  }
}

obj.prototype.saybye='byebyebye';

let obj2= new obj();
console.log(obj2);
console.log(copy(obj2))

// deepCopy 深拷贝还可以用 JSON.parse(JSON.stringify(oldObject))
function deepCopy(obj,c){
  c={} || c;
  for(let i in obj){
    if(obj.hasOwnProperty(i)){
      if(typeof obj[i]==='object'){
        c[i]={};
        c[i]=deepCopy(obj[i],c[i]);
      } else{
        c[i]=obj[i];
      }
    }
  }
  return c;
}

let o1={'a':'1','b':{1:4,2:6,3:{0:'0'}}};
let dco1=deepCopy(o1);
let co1=copy(o1);
console.log(`o1:${o1},dco1:${dco1},co1:${co1}`);