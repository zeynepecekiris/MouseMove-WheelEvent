const kutu=document.querySelector(".kutu");

kutu.addEventListener("mousemove", e=>{
    // console.log(e);
    // console.log(e.offsetx,e.offsetY);
    kutu.textContent=`x koordinati ${e.offsetX}, y koordinati ${e.offsetY}`

})
document.addEventListener("wheel", e=>{
    console.log(e.pageX,e.pageY);
})