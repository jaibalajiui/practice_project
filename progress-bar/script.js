function fillBar(){
    console.log('hai');
    let percent = 0;
    let progressElemeent = document.getElementById("filler");
    for(let i=1;i<=100;i++){
        setTimeout(()=>{
            progressElemeent.style.width = (i+"%");
        },i*10);
    }
}