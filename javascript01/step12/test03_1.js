/* 요청 URL 다루기
*/

const http = require('http')

const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔음')

  // 요청 URL(클라이언트가 원하는 자원) 추출
  console.log(request.url)

  response.writeHead(200, {
    'Content-type': 'text/plain;charset=UTF-8'
  })

  response.write('안녕하세요!')
  response.end()
})

server.listen(8888)
console.log("서버 실행 중..")
