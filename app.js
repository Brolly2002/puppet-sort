//swap function
function swap(a,b){
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}

// functions to enable and disable buttons
function enableSort(){
    document.querySelector(".bubble").disabled=false;
    document.querySelector(".quick").disabled=false;
    document.querySelector(".merge").disabled=false;
    document.querySelector(".insertion").disabled=false;
    document.querySelector(".selection").disabled=false;
    // document.querySelector(".array-gen-button").disabled=false;
    // document.querySelector("#array-size").disabled=false;
}

function disableSort(){
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".quick").disabled=true;
    document.querySelector(".merge").disabled=true;
    document.querySelector(".insertion").disabled=true;
    document.querySelector(".selection").disabled=true;
    // document.querySelector(".array-gen-button").disabled=true;
    // document.querySelector("#array-size").disabled=true;
}

function disableNewArrayBtn(){
    document.querySelector(".array-gen-button").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".array-gen-button").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#array-size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#array-size").disabled = false;
}

function pause(time){
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, time); 
    }) 
}

let arraySize=document.querySelector("#array-size");

arraySize.addEventListener('input',function(){
    createArray(parseInt(arraySize.value));
})
let delay=300;
//speed of bars 
let speedval=document.querySelector("#speed-value");

speedval.addEventListener('input',function(){
    delay=400-parseInt(speedval.value);
});

let array=[];
createArray();

function deleteprev(){
    const bar=document.querySelector("#array-bars");
    bar.innerHTML="";
}

function createArray(countBars=50){
    //clearing the previous input 
    deleteprev();

    array=[];
    for(let i=0;i<countBars;i++){
        // let randomLen=;   //prevent 0 length bar
        array.push(Math.floor(Math.random()*280)+2);
    }

    const bars=document.querySelector("#array-bars");
    
    for(let i=0;i<countBars;i++){
        const bar=document.createElement("div");
        bar.style.height = `${array[i]*1.9}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}


const newArray=document.querySelector(".array-gen-button");
newArray.addEventListener("click",function(){
    enableSort();
    enableSizeSlider();
    createArray(arraySize.value);
});