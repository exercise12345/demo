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
var stars = ["full-star", "full-star", "full-star", "full-star", "full-star"]


var cent = document.getElementById("main");
let renderHtml = `<span>hello</span>`
//评价星星
let commentHtml = ``
var commentList = []
for (var i = 0; i < tag.length - 1; i++) {
  let starHtml = ``
  for (var j = 0; j < stars.length; j++) {
    starHtml += `<div class='${stars[j]}'></div>`
  }
  commentHtml = `<div class="comment">
  `+ tag[i] + starHtml + `
</div>
`
  commentList[i] = commentHtml
}
console.log(commentList)
//评价标签
let labelHtml = ``
for (var j = 0; j < labels.length; j++) {
  labelHtml += `<button class='label'>${labels[j]}</button>`
}
labelHtml = `<div class="comment">` + tag[3] + labelHtml + `
</div>
`
console.log(labelHtml)


cent.innerHTML = ''
for (var i = 0; i < list.length; i++) {
  cent.innerHTML += `
  <div>
    <div class="student-information">
      <span><img src="img/img.png" alt=""></span>
      <span id="name">`+ list[i].name + `</span>
    </div>
    <div class="teacher-evaluation">
      <div class="teacher-comment">
        `+ commentList[0] + commentList[1] + `
      </div>
      <div class="">
        教师评语：<span>`+ list[i].content + `</span>
      </div>
    </div>
    <div class="feedback"><button>回评</button>家长评价</div>
    <div class="parental-evaluation">
      <div>
        <div class="teacher-comment">
        `+ commentList[2] + labelHtml + `
        </div>
        <div>
          家长评语：<span>`+ list[i].content + `</span>
        </div>
      </div>
    </div>
  </div>
  `
}





// for (var i = 1; i < list.length;) {
//   cent.innerHTML +=
//     "<div  class='student-information'>" +
//     " <span><img src='img/img.png' alt=''></span>" +
//     "<span id='name'>" + list[i].name + "</span></div>" +
//     "<div class='teacher-evaluation'>" +
//     "<div class='teacher-comment'>" +

//     "<div class='comment'>" +
//     "<div>纪律专注：</div>" +
//     starstyle.innerHTML +
//     "</div>" +
//     "<div class='comment'>" +
//     "<div>活跃参与：</div>" +
//     starstyle.innerHTML +
//     " </div></div></div>" +
//     "<div class=''>" +
//     "教师评语：<input type='text' name='evaluation' value='" + list[i].content +
//     "'></div>" +
//     "<div class='feedback'><button>回评</button>家长评价</div>" +
//     "<div class='parental-evaluation'>" +
//     "<div>" +
//     " < class='teacher-comment'>" +
//     "<div class='comment'>" +
//     "<div>综合评分：</div>" +
//     starstyle.innerHTML +
//     "</div>" +
//     "<div class='comment'>" +
//     "<div>标签：</div>" +

//     labelstyle.innerHTML +
//     "</div >" +
//     " <div>家长评语：" +
//     " <input type='text' name='evaluation' value='你也是个好人'>" +
//     "</div>" +
//     "</div>"



//     ;
// }

