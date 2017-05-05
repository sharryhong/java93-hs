"use strict"
window.$ = window.jQuery = require('jquery')

let xCol = 4, // 행의 갯수
    yRow = 4, // 열의 갯수
    numArray = [], // 숫자들 담을 배열
    puzzleTable = $('#puzzle-table');

// 배열에 숫자들 담는 함수
function makeNumArray() {
  for (let i = 0; i < xCol; i++) {
    numArray[i] = new Array()  // 2차원배열로 만들기위해
    for (let j = 0; j < yRow; j++) {
      numArray[i][j] = i * xCol + j + 1 // 숫자 넣기
    }
  }
  displayNum()
}

// 숫자 화면 UI
function displayNum() {
  var html = ''
  for (let i = 0; i < xCol; i++) {
    html += '<tr>'
    for (let j = 0; j < yRow; j++) {
      html += '<td class="num btn btn-default">' + numArray[i][j] + '</td>'
    }
    html += '</tr>'
  }
  puzzleTable.html(html)
}

makeNumArray()
