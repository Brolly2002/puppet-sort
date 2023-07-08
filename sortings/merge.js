async function merge(ele,low,mid,high){
    const n1=mid-low+1;
    const n2=high-mid;
    let left=new Array(n1);
    let right=new Array(n2);

    for(let i=0;i<n1;i++){
        await pause(delay);
        ele[low+i].style.background ='red';
        left[i]=ele[low+i].style.height;
    }
    for(let i=0;i<n2;i++){
        await pause(delay);
        ele[mid+1+i].style.background='yellow';
        right[i]=ele[mid+1+i].style.height;
    }
    await pause(delay);
    let i=0,j=0,k=low;

    while(i<n1 && j<n2){
        await pause(delay);
        if(parseInt(left[i])<=parseInt(right[j])){
            if((n1+n2)===ele.length){
                ele[k].style.background="orange";
            }
            else{
                ele[k].style.background='rgb(236, 179, 255)';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1+n2)===ele.length){
                ele[k].style.background="orange";
            }
            else{
                ele[k].style.background='rgb(236, 179, 255)';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        await pause(delay);
        if((n1+n2)===ele.length){
            ele[k].style.background="orange";
        }
        else{
            ele[k].style.background='rgb(236, 179, 255)';
        }
        ele[k].style.height=left[i];
        i++;
        k++;
    }
    while(j<n2){
        await pause(delay);
        if((n1+n2)===ele.length){
            ele[k].style.background="orange";
        }
        else{
            ele[k].style.background='rgb(236, 179, 255)';
        }
        ele[k].style.height=right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    if(l >= r){
        return;
    }
    const m=l+Math.floor((r-l)/2);
    await mergeSort(ele,l,m);
    await mergeSort(ele,m+1,r);
    await merge(ele,l,m,r);
}

const mergeSortbtn = document.querySelector(".merge");
mergeSortbtn.addEventListener('click', async function(){
    let ele=document.querySelectorAll('.bar');
    let l=0;
    let r=ele.length-1;
    disableSort();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSort();
    enableSizeSlider();
    enableNewArrayBtn();
});


