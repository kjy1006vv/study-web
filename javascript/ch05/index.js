const num = [1,2,3,4,5];
console.log(typeof num);
console.log(num);
console.log(num[4]);


//추가
num.push(6);
console.log(num);       
num.pop();
console.log(num);
num.pop();
console.log(num);

//split
let str = "money,3000";
console.log(str);
let arr = str.split(":");
console.log(arr);
console.log(str[6]);


let ele = document.querySelector("#data");
ele.innerHTML = arr[1]+"원 벌었습니다";



