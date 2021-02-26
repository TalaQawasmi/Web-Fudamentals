//1.Biggi size
function Biggi(arr){
    for(var i =0;i<Arr.length;i++){
        if(arr[i]>0){
            arr[i]='big'
        }
    }
return arr[i];
}
//2.Print low, return high
Function LowHigh(arr){
    var high =arr[0];
    var low =arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>high){
            high=arr[i];
        }
        else if(arr[i]<low){
            low=ar[i];
        }
    }
console.log(low)
return high;
}
//3.Print one, retun another
Function PrintReturn(arr){
    for(var i=0;i<arr.length,i++){
        if(i%2!==0){
            return arr[i];
        }
    }
    console.log (arr[arr.length-2]);

}
//4.Double division
Function double(arr){
    newArr=[];
    for(var i=0,i<arr.lengh;i++){
        arr[i]=arr[i]*2;
        newArr.push(arr[i]);
    }
return newArr;
}
//5.Count positives
Function countP(arr){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
        }
    arr[arr.length-1]=count;
    }
return arr;
}
//6.Evens and odds
function oddEven(arr){
    var count odd=0;
    var count even=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count odd++;
            count even =0;
            if(count odd ==3){
                console.log('That is odd!');
            }
        }
        else if([i]%2==0){
            count even++;
            count odd=0
            if(count even ==3){
                console.log('Even more so!')
            }

        }
    }
}
//7.incerement the seconds
function increment(arr){
    for(var i=0; i<arr.length;i++){
        if(i%21==0){
            arr[i]=arr[i]+1;
            console.log(arr[i]);
        }

    }
    return arr;
}

//8.Previous lengths
function lengths(arr){
    for(var i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
//9.Add seven
Function addSeven(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]+7;
        push.newArr(arr[i]);
    }
    return newArr;
}
//10.Reverse array
Function reverse(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=arr.length-1;j>0;j--){
            arr[i]=arr[j];
        }
    }
    return arr;
}
//11.Outlook: Negative
Function negatives(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            arr[i]=arr[i]*-1;
            push.newArr(arr[i]);
        }
        else{
            push.arrNew(arr[i]);
        }
    }
    return newArr;
}

//12.always hungry
Function hungry(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]== 'food'){
            console.log('yummy');
        }
        else{
            console.log('Im Hungry');
            break;
        }
    }
}

//13.Swap towards the center
function swap(arr){
    var temp =arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    arr[2]=arr[arr.length-3];
    var temp2 =arr[2];
    arr[2]=arr[arr.length-3];
    arr[arr.length-3];
    return arr;
}
console.log (swap(arr))



//14/Scale the array
function scaleArr(arr,num){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
