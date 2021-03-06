"use strict"

window.$ = window.jQuery = require('jquery')

const net = require('net')

var host = $('#host'),
    port = $('#port'),
    v1 = $('#v1'),
    v2 = $('#v2'),
    op = $('#op'),
    result = $('#result')

var socket = new net.Socket()

var buffer = ''
	
// 서버에서 data받으면
socket.on('data', (data) => {
	buffer += data,toString() // 데이터 올때마다 버퍼에 담는다. 
    var value = null
	// 줄바꿈 코드를 찾아서 값 추출하기
	while (true) {
		var newLineIndex = buffer.indexOf('\n')
		if (newLineIndex < 0) return; // 줄바꿈코드가 없다면 : 아직 데이터를 덜 받았다.
		// 줄바꿈 코드가 있다면 예) aaa\nccc\n
		// \n코드 앞 문자열 추출 
		value = buffer.substring(0, newLineIndex)
		// \n코드 뒤 문자열은 다시 버퍼에 담기 
		buffer = buffer.substring(newLineIndex + 1)		
		if (value.length > 0) break; // \n코드 앞 문자열이 있으면 반복문을 멈춰서 처리
	}	
	result.val(value)
})

socket.on('error', (error) => {
	alert(error.message)
})

$('#send').click(() => {
	var obj = {
		v1: parseInt(v1.val()),
		v2: parseInt(v2.val()),
		op: op.val()
	}
	socket.connect(parseInt(port.val()), host.val())
	socket.write(JSON.stringify(obj) + '\n')
	socket.end()
})
