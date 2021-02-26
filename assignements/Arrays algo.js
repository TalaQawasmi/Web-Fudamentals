<script>
    console.log ('fisrt solution');
    var testArr = [6,3,5,1,2,4]
    var sum=0;
    for(var i=0; i<testArr.length;i++){
        console.log('Num:'+ testArr[i]);
        sum= sum+testArr[i];
        console.log('Sum:' +sum);
    }
</script>
<script>
    console.log('second solution')
    var testArr = [6,3,5,1,2,4]
    
    for(var i=0; i<testArr.length;i++){
        testArr[i]= testArr[i]*i;
        console.log(testArr[i])
    }
</script>

