//arr - Array 
//k - searching element 
//l - starting index
//r - ending index
//-------------------------------
//! This will return true when value is found else false 
function bSearch(arr,k,l,r){
    if(l>=r){
        return false;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return true;
    }
    else if(k < arr[mid]){
        return bSearch(arr,k,l,mid);
    }
    else{
        return bSearch(arr,k,mid+1,r);
    }  
}
//===================
//! This will return mid(index number) when value is found else give the empty index where we can store a new value

function bSearch(arr,k,l,r){
    if(l>=r){
        return mid;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return mid;
    }
    else if(k < arr[mid]){
        return bSearch(arr,k,l,mid);
    }
    else{
        return bSearch(arr,k,mid+1,r);
    }  
}
//=======================
//! This will return mid(index number) when value is found else -1; 


function bSearch(arr,k,l,r){
    if(l>=r){
        return -1;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return mid;
    }
    else if(k < arr[mid]){
        return bSearch(arr,k,l,mid);
    }
    else{
        return bSearch(arr,k,mid+1,r);
    }  
}