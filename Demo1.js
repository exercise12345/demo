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
var objList=[]
var tag = ["纪律专注：", "活跃参与：", "综合评价：", "标签:"]
var stars = ["empty-star", "empty-star", "empty-star", "empty-star", "empty-star"]


var storage = window.sessionStorage;  
var objList = JSON.parse(storage.getItem("data"))

console.log(objList)

var cent = document.getElementById("main");
//评价星星
let commentHtml = ``
var commentList = []
for (var i = 0; i < tag.length - 1; i++) {
  let starHtml = ``
  for (var j = 0; j < stars.length; j++) {
    starHtml += `<div class='${stars[j]}  ${'tag' + i}'></div>`
  }
  commentHtml = `<div class="comment">
  `+ tag[i] + starHtml + `
</div>
`
  commentList[i] = commentHtml
}
//评价标签
var labelList = []

for (var i = 0; i < objList.length; i++) {
  let labelHtml = ``
  for (var j = 0; j < objList[i][3].length; j++) {
    labelHtml += `<button class='label'>${objList[i][3][j]}</button>`
  }
  labelHtml1 = `<div class="comment">` + tag[3] + labelHtml + `
</div>
`
  
labelList[i]=labelHtml1
}
console.log(labelList)
for (var i = 0; i < objList.length; i++) {
 
  cent.innerHTML += `
  <div>
    <div class="student-information">
      <span><img src="img/img.png" alt=""></span>
      <span id="name">`+ list[0].name + `</span>
    </div>
    <div class="teacher-evaluation">
      <div class="teacher-comment">
        `+ commentList[0] + commentList[1] + `
      </div>
      <div class="remark">
        教师评语：
          <textarea  cols = "50" rows = "4" maxlength="1000"value="" >`+objList[i][4]+`</textarea>
      </div >
    </div >
    <div class="feedback"><button>回评</button>家长评价</div>
    <div class="parental-evaluation">
      <div>
        <div class="teacher-comment">
          `+ commentList[2] + labelList[i] + `
        </div>
        <div class="remark">
          家长评语：<textarea  cols = "50" rows = "4" maxlength="1000" placeholder="" value="" >`+objList[i][5]+`</textarea>
        </div>
      </div>
    </div>delete
    <div>
      <button onclick="deleteComment(`+i+`)" >
        删除评论
      </button>
    </div>
  </div >
    `
  
    showStars (i)
}

cent.innerHTML +=`<div>
<button onclick="jump()" >
  添加评论
</button>
</div>`
function jump () {
  //清除label1中的值
  label1=[]
  console.log(label1)
  window.location.href="Demo2.html";
}
function deleteComment (num) {
  console.log(num)
  var arr = JSON.parse(storage.getItem('data'))
  console.log(arr)
  arr.splice(num,1);
  storage.setItem('data', JSON.stringify(arr));
  console.log(arr)
  window.location.reload()
}

function showStars (num) {
  comment = document.querySelectorAll(".comment");
  for (var j = 0; j < comment.length; j++) {
    lis = document.querySelectorAll(`.comment .tag${j}`);
    fnShow(objList[num][j])
  }
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

