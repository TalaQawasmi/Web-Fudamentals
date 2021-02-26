function a(){
    return 35;
}
console.log(a())
// T diagram >> a =35
// Output >> 35

function a(){
    return 4;
}
console.log(a()+a());
// T diagram >> a=4,4
// Output >> 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
// T diagram >> b=2,4 
// Output >> 6

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
// T diagram >> b=3 
// Output >>3,9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 // T diagram >> b=10,
// Output >>40
 
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// T diagram >> b=15
// Output >> 4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// T diagram >> b=3, c=10
// Output >> 10,3,30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// T diagram >> 
// Output >>3,4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// T diagram >> i=0,3,6,9
// Output >>2,5,6,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// T diagram >> i=0,1,2,3,4,5,6,7,8,9
// Output >>0,1,2,3,4,5,6,7,8,9,0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// T diagram >> 
// Output >> it will print nothing because the function is not called

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// T diagram >> 
// Output >> it will print nothing because the function is not called

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// T diagram >> z=10
// Output >> 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// T diagram >> z=10,15
// Output >>15,10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// T diagram >> z=10,15
// Output >>15,15



