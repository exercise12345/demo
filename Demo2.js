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
var labels = ["教学水平差", "服务态度差", " 作业布置不合理"]
var tag = ["纪律专注：", "活跃参与：", "综合评价：", "标签:"]
var stars = ["empty-star", "empty-star", "empty-star", "empty-star", "empty-star"];


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
  commentList[i] = commentHtml
}


//评价标签
let labelHtml = ``
for (var j = 0; j < labels.length; j++) {
  labelHtml += `<button class='label' onclick='clickLabel(event)'>${labels[j]}</button>`
}
labelHtml = `<div class="comment">` + tag[3] + labelHtml + `
</div>
`
cent.innerHTML = `
  <div>
    <div class="student-information">
      <span><img src="img/img.png" alt=""></span>
      <span id="name">`+ list[1].name + `</span>
    </div>
    <div class="teacher-evaluation">
      <div class="teacher-comment">
        `+ commentList[0] + commentList[1] + `
      </div>
      <div class="remark">
        教师评语：
          <textarea  class='text' cols = "50" rows = "4" maxlength="1000" placeholder="最多输入1000个字" required ></textarea>
      </div >
    </div>
    <div class="feedback"><button>回评</button>家长评价</div>
    <div class="parental-evaluation">
      <div>
        <div class="teacher-comment">
          `+ commentList[2] + labelHtml + `
        </div>
        <div class="remark">
          家长评语：
          <textarea  class='text' cols = "50" rows = "4" maxlength="1000" placeholder="最多输入1000个字" required ></textarea>
        </div>
      </div>
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

