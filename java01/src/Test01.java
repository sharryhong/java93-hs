/* 자바 프로그래밍 - 소개*/
class Test01 {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}

/*
자바 소프트웨어 종류
1) JRE (Java Runtime Environment)
- 자바 프로그램을 실행하는 일반 사용자를 위한 소프트웨어이다.
- 자바 바이트코드(bytecode)를 실행할 때 필요한 프로그램들이 들어 있다.
- 핵심 구성 요소
  => Java Vitual Machine(JVM): bytecode 실행 프로그램
  => 자바 프로그램을 실행하는데 필요한 필수 자바 라이브러리

2) JDK (Java Development Kit)
- 자바 프로그램을 만드는 개발자가 사용하는 소프트웨어이다.
- 자바 프로그램을 개발하는데 필요한 프로그램들이 들어 있다.
- 핵심 구성 요소
  => JRE 포함. (왜? 만든 프로그램을 테스트해야 하니까!)
  => 자바 컴파일러, 프로파일러, 문서 생성기 등 개발 도구를 포함.

3) Server-JRE
- 서버 운영자가 서버에 설치하는 소프트웨어이다.
- 기존의 JRE에서 데스크톱 애플리케이션 관련 기능을 제외시키고,
  대신 서버 애플리케이션 관리에 필요한 모니터링 기능을 추가하였다.
- 일반인들이 사용하는 소프트웨어는 아니다.

자바 컴파일러와 JVM
1) 자바 컴파일러
- 자바 소스 코드를 JVM이 이해할 수 있는 bytecode로 변환시키는 프로그램이다.
- source code? 변환하기 전의 원본 코드
- target code? 특정 기계에서 실행할 수 있도록 변환한 코드
- 컴파일(compile)? 소스 코드를 타겟 코드로 변환시키는 작업을 말한다.

2) 자바 가상기계(JVM)
- 자바 컴파일러가 변환한 bytecode(=p-code)를 실행시키는 프로그램이다.
- bytecode를 읽어서 OS의 코드(기능)를 호출하는 일을 한다.

bytecode와 native code
1) bytecode
- 특정 프로그램(예: JVM, PPT, Excel, Flash Player, MP3 Player 등)이 이해하는 코드이다.
- 가상 기계를 위한 코드라 부른다.
- 그 특정 프로그램이 없이는 실행할 수 없다.
- native 코드를 실행하는 것에 비해 실행 속도가 느리다.
- OS에 독립적이다. 즉 어떤 OS이던지 VM이 설치되어 있다면 실행할 수 있다.

2) native code
- 특정 OS의 기능을 바로 호출하는 코드이다.
- 기계어 코드라 부른다.
- OS에 의해 바로 실행할 수 있다.
- OS에 종속적이다. 특정 OS에서만 실행할 수 있다.
  다른 OS에서 실행하려면 코드의 일부를 다시 짜고 컴파일 해야 한다.

source를 바로 실행하는 것과 bytecode를 실행하는 것과의 차이
1) source를 바로 실행하기
- 컴파일이라는 과정을 거치지 않기 때문에 프로그램을 배포하기가 쉽다.
  즉 프로그램을 변경할 때 마다 컴파일 할 필요가 없이 바로 배포할 수 있다.
- 소스를 바로 실행하면,
  매번 실행할 때마다 소스 코드를 분석해야 하고,
  문법의 유효성을 검사해야 한다.
  즉 실행속도가 느리다.

2) bytecode를 실행하기
- 컴파일이라는 과정을 반드시 거쳐야 한다.
  즉 프로그램을 변경할 때 마다 컴파일 한 후 배포해야 한다.
- bytecode를 실행하면,
  컴파일 과정에서 소스코드를 분석하고, 문법의 유효성을 검사하기 때문에
  실행할 때는 이 과정을 수행할 필요가 없어서 실행 속도가 빠르다.
- 실행할 때도 VM 입장에서 소스 코드 보다 좀 더 이해하기 쉬운 기계어에 가까운
  bytecode를 실행하기 때문에 속도가 빠르다.

3) native 코드 실행하기
- OS의 형식에 맞춰서 작성된 완전한 기계어 코드이기 때문에
  바로 실행할 수 있어서 가장 실행 속도가 빠르다.
- 단 특정 OS에서만 알아보는 코드가 삽입되기 때문에
  다른 OS에서는 실행할 수 없다면 단점이 있다.

컴파일과 실행
1) 컴파일
- 자바 소스 코드를 바이트코드(bytecode)로 만드는 것.
- 컴파일러(compiler)? 컴파일을 수행하는 프로그램이다.
- 컴파일 방법
  > javac 소스파일명
  > javac Test01.java
- 소스 파일이 OS와 다른 형식으로 인코딩 되어 있다면,
  > javac -encoding 문자집합 소스파일명
  > javac -encoding utf8 Test01.java

2) 실행
- 바이트코드를 실행하는 것.
- 자바가상기계(JVM)? 바이트코드를 읽어서 OS의 기능을 호출해주는 프로그램.
- 실행 방법
  > java 클래스명
  > java Test01  <== .class 확장자를 적어서는 안된다.
*/








//
