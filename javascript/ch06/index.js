//오브젝트 - 배열 비교
//number , str , array(object) , boolean,object , null 6가지

let soccer = {
    name:"축구",
    count:11,
    need:"공"

}


let people = {
    name:"cos",
    phone:"01022225555", //java는 40억 정도까지밖에 표현못함
    address:"busan",
    age:50
}
console.log();


//오브잭트 = 사물 {...}
console.log(people);
console.log(typeof people);

console.log(people.name);
console.log(people.phone);
console.log(people.address);
console.log(people.age);

let num1 = [1,2,3,4,5];//array 키값이 정해져있음

let num2 = {
    one:1,
    two:2,
    important:3,
    four:4,
    five:5,
    hobby:["농구",soccer]
//object 키값을 만들수있음
}
console.log(num2);
console.log(num2.important);
console.log(num2.hobby[0]);

let c = [3,3,3,"3",3,3,3,3,3]; 
//javascript는 여기 ""가 허용됨
//java는 절대 안됨
console.log(c);
console.log(num2.hobby[1].count);

