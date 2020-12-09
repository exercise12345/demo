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
var stars = ["empty-star", "empty-star", "empty-star", "empty-star", "empty-star"];
var test = [
  { 纪律专注: stars },
  { 活跃参与: stars },
]

var cent = document.getElementById("main");
//评价星星
let commentHtml = ``
var commentList = []
for (var i = 0; i < tag.length; i++) {
  let starHtml = ``
  for (var j = 0; j < stars.length; j++) {
    starHtml += `<div class='${stars[j]} ${'tag' + i}' ></div>`
  }
  commentHtml = `<div class="comment">
  `+ tag[i] + starHtml + `
</div>
`
  console.log(commentHtml)
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
          <textarea  id='text' cols = "50" rows = "4" maxlength="1000" placeholder="最多输入1000个字" required ></textarea>
      </div >
    </div>
    <div>
      <button onclick="submit()" >
        保存
      </button>
    </div>
  </div >
    `

//lis[0].addEventListener("mouseover", function () { alert(1) }, false)

//调试阶段代码

// for (var j = 0; j < lis.length; j++) {
//   lis[j].index = j;
//   /**lis[i].addEventListener("mouseover", function () { //鼠标经过点亮星星。
//     fnShow(this.index + 1);//传入的值为正，就是finalnum
//   }, false);
//   lis[i].addEventListener("mouseout", function () { //鼠标离开时星星变暗
//     fnShow(0);//传入值为0，finalnum为tempnum,初始为0
//   }, false)*/
//   lis[j].addEventListener("click", function () { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
//     fnShow(this.index + 1);
//     tempnum = this.index + 1;
//   }, false)
// }

