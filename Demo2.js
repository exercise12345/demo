var list = [{
  name: "小张",
  content: "小张说：“1+1=2”"
},
{
  name: "小刘",
  content: "小刘说：“2+1=2”"
},
{
  name: "小李",
  content: "小李说：“3+1=2”"
},
]
var tag = ["纪律专注：", "活跃参与："]
var stars = ["empty-star", "empty-star", "empty-star", "empty-star", "empty-star"]
var cent = document.getElementById("main");
//评价星星
let commentHtml = ``
var commentList = []
for (var i = 0; i < tag.length; i++) {
  let starHtml = ``
  for (var j = 0; j < stars.length; j++) {
    starHtml += `<div  class='${stars[j]}' onclick=''></div>`
  }
  commentHtml = `<div class="comment">
  `+ tag[i] + starHtml + `
</div>
`
  commentList[i] = commentHtml
}
console.log(commentList)


cent.innerHTML = `
  <div>
    <div class="student-information">
      <span><img src="img/img.png" alt=""></span>
      <span id="name">`+ list[i].name + `</span>
    </div>
    <div class="teacher-evaluation">
      <div class="teacher-comment">
        `+ commentList[0] + commentList[1] + `
      </div>
      <div class="remark">
        教师评语：
          <textarea  cols = "50" rows = "4" maxlength="1000" placeholder="最多输入1000个字" required ></textarea>
      </div >
    </div >
    <div>
      <button onclick="">
        保存
      </button>
    </div>
    
  </div >
    `
var num = finalnum = tempnum = 0;
var lis = document.querySelectorAll(".empty-star");
console.log(lis)
//num:传入点亮星星的个数
//finalnum:最终点亮星星的个数
//tempnum:一个中间值
function fnShow (num) {
  finalnum = num || tempnum;//如果传入的num为0，则finalnum取tempnum的值
  for (var i = 0; i < lis.length; i++) {
    lis[i].className = i < finalnum ? "full-star" : "empty-star";//点亮星星就是加class为light的样式
  }
}
//lis[0].addEventListener("mouseover", function () { alert(1) }, false)
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].addEventListener("mouseover", function () { //鼠标经过点亮星星。
    fnShow(this.index + 1);//传入的值为正，就是finalnum
  }, false);
  lis[i].addEventListener("mouseout", function () { //鼠标离开时星星变暗
    fnShow(0);//传入值为0，finalnum为tempnum,初始为0
  }, false)
  lis[i].addEventListener("click", function () { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
    tempnum = this.index + 1;
  }, false)
}

