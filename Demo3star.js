var comment = [];
comment = document.querySelectorAll(".comment");
var obj = {};
var lis = [];
for (var i = 0; i < comment.length-1; i++) {
  comment[i].index = i;
  comment[i].addEventListener("mouseover", function () { //鼠标经过事件
    starShow(this.index)
  }, false)
}
var tagNum
function starShow (tagNum) {
  lis = document.querySelectorAll(`.comment .tag${tagNum}`);
    for (var j = 0; j < lis.length; j++) {
      lis[j].index = j;
      lis[j].addEventListener("click", function () { //鼠标点击
        fnShow(this.index + 1);
        obj[tagNum] = this.index + 1;  
        str = JSON.stringify(obj);
      }, false)
  }
}
var label1 = []
function clickLabel (ev) {
  label1.push(ev.target.innerText)
  console.log(label1)
}

//num:传入点亮星星的个数
var num = 0;
function fnShow (num) {
  for (var i = 0; i < lis.length; i++) {
    lis[i].className = i < num ? "full-star" : "empty-star";//点亮星星就是加class为light的样式
  }
}
console.log(obj)
//跳转传值

function submit () {  

  
  var text = document.getElementsByClassName("text");
  for (var i = 0; i < text.length; i++){
    console.log(text[i].value)
    obj[comment.length+i] = text[i].value
  }
  obj[comment.length - 1] = label1;
  setInfo(obj)

  console.log(label1)
  window.location.href="Demo1.html";
}  
//储存数组数据  
function setInfo (object) {  
  var storage = window.sessionStorage;
  var arr = JSON.parse(storage.getItem('data'))==null?new Array():JSON.parse(storage.getItem('data'));  
  arr.push(object);
  storage.setItem('data',JSON.stringify(arr));
  console.log(object)
}  