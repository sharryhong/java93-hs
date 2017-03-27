/* 주제: setInterval(callback, delay[, ...args])
- clearInterval()
*/

"use strict"

var count = 0
// let으로 해야 timer변수를 덮어쓰지 못하게 방지할 수 있다.
{
  let timer = setInterval(function() { // 리턴한 객체가 timer
    if (++count === 3)
    clearInterval(timer) // 아규먼트 : 멈출 객체. 지정한 타이머를 멈춘다.
    console.log(count + '초 지났음')
  }, 1000)
} // 블록을 벗어나면 let timer는 사라진다. 따라서 클로저라는 별도의 메모리 영역에 timer를 복제해둔다. 

var timer = 'ok' // 만약 위의 setInterval주소가 저장되어 있는 timer가 global변수라면..
                // setInterval이 비동기이므로 timer에 문자열이 들어간다. 즉, clearInterval(timer)가 안먹는다.
                // let은 한번 선언하면 다시 선언시 에러뜨므로 덮어쓰지 못하게 방지할 수 있다.
timer = 'ok'    // 이건 못 막는다. 따라서 위의 timer부분을 블록으로 감싸라.
console.log(timer);
