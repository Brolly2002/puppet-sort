//need 4 colours to make this
async function select(){
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        let min_index=i;
        ele[i].style.background="grey";
        for(let j=i+1;j<ele.length;j++){
            ele[j].style.background="rgb(230, 0, 172)";
            await pause(delay);
            if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height)){
                if(min_index!==i){
                    ele[min_index].style.background="cyan";
                }
                min_index=j;
            } 
            else{
                ele[j].style.background="cyan";
            }   
        }
        await pause(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background="cyan";
        ele[i].style.background="orange";
    }
}

const selectionbtn=document.querySelector(".selection");
selectionbtn.addEventListener('click', async function(){
    disableSort();
    disableSizeSlider();
    disableNewArrayBtn();
    await select();
    enableSort();
    enableSizeSlider();
    enableNewArrayBtn();
});