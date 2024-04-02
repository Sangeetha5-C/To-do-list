let input = document.getElementById("input");
let add = document.getElementById("button");
let areaList = document.getElementById("childBox");

add.addEventListener("click", function () {
  var para = document.createElement("h2");
  para.innerText = input.value;
  areaList.appendChild(para);

  input.value=""

  para.addEventListener("click",function(){
    para.style.color="red";
    para.style.textDecoration="line-through";
  });

  para.addEventListener("dblclick",function(){
    areaList.removeChild(para)
  });
});
