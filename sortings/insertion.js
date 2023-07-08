async function insertion(){
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background="orange";
    for(let i=1;i<ele.length;i++){
        let j=i-1;
        let key=ele[i].style.height;
        ele[i].style.background="rgb(230, 0, 172)";

        await pause(delay);

        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key))){
            ele[j].style.background="rgb(230, 0, 172)";
            ele[j + 1].style.height=ele[j].style.height;
            j--;
            await pause(delay);
            for(let k=i; k>= 0; k--){
                ele[k].style.background="orange";
            }
        }
        ele[j+1].style.height=key;
        ele[i].style.background="orange";
    }
}

let insertionbtn=document.querySelector(".insertion");
insertionbtn.addEventListener("click",async function(){
    disableSort();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSort();
    enableSizeSlider();
    enableNewArrayBtn();
});