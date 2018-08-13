// 判断各种数据类型
// 可以看到，typeof对于基本数据类型判断是没有问题的，但是遇到引用数据类型（如：Array）是不起作用的。
console.log(typeof "");
console.log(typeof 1);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof function(){});
console.log(typeof {});

console.log('-----------------------');

var a = Object.prototype.toString;

console.log(a.call("aaa"));
console.log(a.call(1));
console.log(a.call(true));
console.log(a.call(null));
console.log(a.call(undefined));
console.log(a.call([]));
console.log(a.call(function() {}));
console.log(a.call({}));

console.log('------------------');

console.log(a.call('aaa')==='[object String]')
console.log(a.call(function(){}));