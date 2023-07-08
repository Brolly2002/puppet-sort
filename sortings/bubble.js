async function bubble(){
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<ele.length-i-1;j++){
            ele[j].style.background="rgb(230, 0, 172)";
            ele[j+1].style.background="rgb(230, 0, 172)";

            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
                await pause(delay);
                swap(ele[j],ele[j+1]);
            }

            ele[j].style.background="cyan";
            ele[j+1].style.background="cyan";
        }
        ele[ele.length-i-1].style.background="orange";
    }
    ele[0].style.background="orange";
}

let bubblebtn=document.querySelector(".bubble");
bubblebtn.addEventListener("click",async function(){
    disableSort();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSort();
    enableSizeSlider();
    enableNewArrayBtn();
});