//1.Sigma
function sigmaInteger(num){
    var sum=0;
    for(var i =num;i<=num;i--){
        if(i>0){
            sum+=i;
        }
    }
    return sum;
}


//2.Factorial
function fact(num){
    for(var i =num-1; i>0;i--){
        if(num == 0){
            return 1;
        }
        else{
        num= num*i;
        }
    }
    return num;
}

3//Fibonacci
function febonacci(num){
    var arr = [0,1];
    arr[0]=0;
    arr[1]=1;
    for(var i=2;i<num;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr;
}
console.log(febonacci(num));

//Array:second to last
function secondToLast(arr){
    for(var i=0;i<arr.length;i++){
        if(arr.length<=2){
            console.log('Null')
        }
        else{
            console.log(arr[arr.length-2]);
        }
    }
}

//Array:Second largest
function secondLargest(arr){
    var largest1=arr[0];
    var largest2=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr.length<=1){
            console.log('Null');
        }
        else if(arr[i]>largest1){
                largest2=largest1;
                largest1=arr[i];
                if(arr[i]>largest2 && arr[i]<largest1){
                    largest2=arr[i];
                }
            }  
    }
    return largest2;
}

//Array: Nth-to-Last
function nthToLast(arr,num){
    if(arr.length<1){
        console.log('Null')
    }
    console.log(arr[arr.length-num]);
}

//Double Trouble
function doubleTrouble(arr){
    for(var i=0;i<arr.length;i+=2){
        arr.splice(i,0,arr[i]);
    }
    return arr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));
