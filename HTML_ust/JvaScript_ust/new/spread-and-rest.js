const average=function(...nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum/nums.length;
}
let avg=average(10,20,30,40,50)
console.log(avg)
let arr=[10,20,30,40,50]
let[a,b]=arr;//Array de-Structuring  //10 20
let[x,,,y]=arr;//10 40
let[p,...q]=arr;// 10 [20,30,40,50]
console.log(arr);
console.log(a,b);
console.log(x,y);
console.log(p,q);


let arr2=[...arr];
console.log(arr2);

let employee={
    id:1001,
    name:'Rahul',
    email:'rahul@gmail.com',
    salary:'52000.00'
};

let{id,email}=employee;//equivalent to "let id2=employee.id"
console.log(id,email);