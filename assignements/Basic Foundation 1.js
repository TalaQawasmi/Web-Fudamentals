//Get 1 to 255
function get_array() {
    var arr = [];
    for (var i=1; i<=255; i++)
    {
        arr.push(i)
    }
    return arr; 
}
//Get even 1000
function sum_even_numbers(){
    var sum = 0;
    for (i=1; i<=1000;i++)
    if (i%2===0){
        sum+=i
    }
    return sum; 
}
//Summ odd 5000
function sum_odd_5000() {
    var sum = 0;
    for(i=1;i<=5000;i++)
    if(i%2!==0){
        sum+=i
    }

    return sum; 
}
//Iterate an array
function iterArr(arr) {
    var sum = 0
    for(var i=0; i<arr.length;i++){
        sum=sum +arr[i]
    }
    return sum; 
}
//Find max
function findMax(arr) {
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
       if(arr[i]>max){
           max=arr[i];
       } 
    }
    return max; 
}
//Find average
function findAvg(arr) {
    var sum=0;
    var avg;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];  
    }
    avg=sum/arr.length;
    return avg; 
}
//Array odd
function oddNumbers() {
    var arr = [];
    for(var i=1; i<50; i++){
        if(i%2!==0){
            arr.push(i);
        }
    }
    return arr; 
}
//Greater than Y
function greaterY(arr, Y) {
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count++;
        }
    } 
    return count; 
}
//Squares
function squareVal(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr; 
}
//Negatives
function noNeg(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr; 
}
//Max/Min/Avg
function maxMinAvg(arr) {
    var max=arr[0];
    var min=arr[0];
    var avg;
    var arrnew =[];
    var sum =0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum+= arr[i];
    }
    avg=sum/arr.length;
    arrnew.push(max,min,avg)
    return arrnew; 
}
//Swap values
function swap(arr) {
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]= temp;
    var arrnew=[];
    for(var i=0;i<arr.length;i++){
        arrnew.push(arr[i])
    }
    return arrnew; 
}
//Number to string
function numToStr(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr; 
}