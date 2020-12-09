comment = [];
 comment = document.querySelectorAll(".comment");
var obj = {};
var lis = [];
for (var i = 0; i < comment.length; i++) {
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

//num:传入点亮星星的个数
var num = 0;
function fnShow (num) {
  for (var i = 0; i < lis.length; i++) {
    lis[i].className = i < num ? "full-star" : "empty-star";//点亮星星就是加class为light的样式
  }
}

//跳转传值
function submit () {  
  var str = document.getElementById("text").value.trim();
  obj[2] = str
  setInfo(JSON.stringify(obj));
  window.location.href="Demo1.html";
}  
//储存数据  
function setInfo(data) {  
  var storage = window.sessionStorage;
  storage.setItem('data', data);  
  console.log(data+"!")
}  