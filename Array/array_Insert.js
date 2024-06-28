// Insert :-
// It add given number to given positon of array

const arr = [20,34,51,6,37,0,89,26];

const position = 1;

const num = 1000;

console.log(arr);

for(let i=arr.length-1;i>=0;i--){

if(i>=position){

      arr[i+1]=arr[i]

      if(i==position){
        arr[i]=num;
      }
}

}
console.log(arr);


