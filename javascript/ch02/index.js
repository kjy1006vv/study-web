const firstName = "gildong";
const lastName ="HONG"
//const 상수

//let 변수

console.log(firstName);
console.log(lastName);
console.log(lastName+" "+firstName);

const fullName = lastName+" "+firstName;
console.log(fullName);

// 대문자 소문자
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

const sendMoney = "money,10000,recever,jooho,sender,cos";
console.log(sendMoney.split(","));

const data = sendMoney.split(",");
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);
console.log(data[5]);

console.log(1+2);
console.log(1+"2"); //문자결합