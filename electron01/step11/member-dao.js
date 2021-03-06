// MEMB 테이블 데이터 처리

"use strict"

function createMemberDao(connection) {
  return {
    insert: function(member, successFn, errorFn) {
      connection.query(
        'insert into memb(name,tel,email,pwd) values(?,?,?,password(?))',
        [ member.name, member.tel, member.email, member.password],
        function(error, result) {
          if (error) {
            errorFn(error)
          } else {
            successFn(result)
          }
      }) //connection.query()
    }, //insert()

    update: function(member, successFn, errorFn) {
      connection.query(
        'update memb set name=?, tel=?, email=? where mno=?',
        [member.name, member.tel, member.email, member.no],
        function(error, result) {
          if (error) {
            errorFn(error)
          } else {
            successFn(result)
          }
      })
    }, // update()

    delete: function(no, successFn, errorFn) {
      connection.query(
        'delete from memb where mno=?', [no],
        function(error, result) {
          if (error) {
            errorFn(error)
          } else {
            successFn(result)
          }
      })
    } // delete()
  } // return
} // createMemberDao()
