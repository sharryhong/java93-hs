"use strict"
window.$ = window.jQuery = require('jquery')
const mysql = require('mysql')
const connection = mysql.createConnection({
  database: 'webappdb',
  user: 'webapp',
  password: '1111'
})
connection.connect()

var fiNo = $('#fi-no'),
    fiEmail = $('#fi-email'),
    fiName = $('#fi-name'),
    fiTel = $('#fi-tel'),
    fiSchoolName = $('#fi-school-name'),
    fiWorking = $('#fi-working');

if (location.search == "") {
  // 새 사용자 등록을 처리한다.
  // 상세보기와 관련된 태그는 감춘다.
  $('.bit-view').css('display', 'none')

  // 새 사용자 등록과 관련된 태그는 보이게 한다.
  $('.bit-new').css('display', '')

  // 추가 버튼에 click 이벤트 핸들러(리스너)를 등록한다.
  $('#add-btn').click(function() {
    // 기본 멤버테이블 먼저 등록
    connection.query(
      'insert into memb(name, tel, email, pwd) values(?, ?, ?, password(?))',
      [
        fiName.val(),
        fiTel.val(),
        fiEmail.val(),
       '1111'
      ],
      function(error, result) {
        if (error) {
          alert('회원 기본 데이터 등록 중 오류 발생!')
        }
        // 학생테이블 등록
        // 멤버테이블에서 자동증가한 값을 가져와야 한다. result.insertId
        connection.query(
          'insert into stud(sno, work, schl_nm) values(?, ?, ?)',
          [
            result.insertId,
            (fiWorking.prop('checked') ? "Y" : "N"),
            fiSchoolName.val(),
          ],
          function(error, result) {
            if (error) {
              alert('학생 데이터 등록 중 오류 발생!')
            }
            location.href = "index.html"
        }) // connection.query
      }) // connection.query
  }) // click()

} else { // 기존 사용자 정보를 가져온다.
  // 새 사용자 등록과 관련된 태그는 감춘다.
  $('.bit-new').css('display', 'none')

  // URL에서 학생 번호(no)를 추출한다.
  var no = location.search.substring(1).split('=')[1]

/* sql 쿼리문 확인하자
select m.mno, m.name, m.tel, m.email, s.work, s.schl_nm
  from stud s inner join memb m on s.sno = m.mno
  where s.sno=1;
*/

  connection.query(
    'select m.mno, m.name, m.tel, m.email, s.work, s.schl_nm \
    from stud s inner join memb m on s.sno = m.mno \
    where s.sno=?',
    [no],
    function (error, results) {
      console.log("results=", results)
      if (error) throw error
      var student = results[0]
      fiNo.text(student.mno)
      fiEmail.val(student.email)
      fiName.val(student.name)
      fiTel.val(student.tel)
      fiSchoolName.val(student.schl_nm)
      fiWorking.attr('checked', student.work == 'Y' ? true : false)
  }) // connection.query


/*
update stud set work=?, schl_nm=? where sno=?

*/
$('#upd-btn').click(function() {
  // work가 어떤 값을 리턴하는지 궁금해!
  // console.log(fiWorking.attr('checked')) 이건 checked가 없으면 undefined이네!
  // console.log(fiWorking.prop('checked'))
  // 기본 멤버테이블 정보 변경
  connection.query(
    'update memb set name=?, tel=?, email=? where mno=?',
    [fiName.val(),
     fiTel.val(),
     fiEmail.val(),
     no
    ],
    function(error, result) {
      if (error) {
        alert('회원 기본 데이터 변경 중 오류 발생!')
      }
      // 학생테이블 변경
      connection.query(
        'update stud set work=?, schl_nm=? where sno=?',
        [(fiWorking.prop('checked') ? "Y" : "N"),
         fiSchoolName.val(),
         no
        ],
        function(error, result) {
          if (error) {
            alert('학생 데이터 변경 중 오류 발생!')
          }
          location.href = "index.html"
      }) // connection.query
    }) // connection.query
  }) // click()

  $('#del-btn').click(function() {
    connection.query(
      'delete from stud where sno=?',
      [no],
      function(error, result) {
        if (error) {
          alert('학생 데이터 삭제 중 오류 발생!')
          throw error
        }
        // 학생테이블 변경
        connection.query(
          'delete from memb where mno=?',
          [no],
          function(error, result) {
            if (error) {
              alert('기본 회원 데이터 삭제 중 오류 발생!')
              throw error
            }
            location.href = "index.html"
        }) // connection.query
      }) // connection.query
  }) // click()
} // else

$('#lst-btn').click(function() {
  location.href = "index.html"
})
