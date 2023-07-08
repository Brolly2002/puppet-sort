async function find_pivot(ele,l,r){
    let i=l-1;
    ele[r].style.background="rgb(230, 0, 172)";
    for(let j=l;j<=r-1;j++){
        ele[j].style.background='yellow';
        await pause(delay);

        if(parseInt(ele[j].style.height)<parseInt(ele[r].style.height)){
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.background='rgb(236, 179, 255)';
            if(i!=j)ele[j].style.background='rgb(236, 179, 255)';
            await pause(delay);
        }
        else{
            ele[j].style.background='rgb(255, 51, 51)';
        }
    }
    i++; 
    await pause(delay);
    swap(ele[i],ele[r]); 

    ele[r].style.background='rgb(255, 51, 51)';
    ele[i].style.background='orange';

    await pause(delay);
    
    for(let k=0;k<ele.length;k++){
        if(ele[k].style.background!='rgb(236, 179, 255)')
            ele[k].style.background='orange';
    }

    return i;
}

async function quickSort(ele,l,r){
    if(l<r){
        let pivot_index =await find_pivot(ele,l,r);
        await quickSort(ele,l,pivot_index-1);
        await quickSort(ele,pivot_index+1,r);
    }
    else{
        if(l>=0 && r>=0 && l<ele.length && r<ele.length){
            ele[r].style.background='orange';
            ele[l].style.background='orange';
        }
    }
}
const quickbtn=document.querySelector(".quick");
quickbtn.addEventListener('click', async function(){
    let ele=document.querySelectorAll('.bar');
    let l=0;
    let r=ele.length-1;
    disableSort();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele,l,r);
    enableSort();
    enableSizeSlider();
    enableNewArrayBtn();
});