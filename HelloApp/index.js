



function GetNext(arr, i) {
    console.log(arr[i]);
    i++;
    if(arr[i] != null){
        GetNext(arr, i);
    }
}

function ArrayChallenge(arr){
    // arr.forEach(element => {
    //    console.log(element); 
    // });
    let i = 0;
    GetNext(arr, i);
}
function main() {
 let arr = [1,2,3,4,5,6,7,8,9,10];   
 ArrayChallenge(arr);
}

main();