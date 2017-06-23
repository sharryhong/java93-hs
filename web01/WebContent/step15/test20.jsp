<%-- JSP 구성요소
1) 템플릿 데이터
2) 스크립트릿(scriptlet) 엘리먼트
3) 지시(directive) 엘리먼트
4) 표현식(expresstion) 엘리먼트
5) 선언문(declaration) 엘리먼트
6) JSP 액션 태그 
7) JSP 확장 태그(JSTL)
8) EL(Expresstion Language)
9) JSP 주석
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
  trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html">
<html>
<head>
  <meta charset=UTF-8">
  <title>JSP</title>
</head>
<body>
<h1>JSTL - c:if 태그 사용법</h1>
<c:set var="name" value="유관순"/>
<c:set var="age" value="20"/>
<c:set var="working" value="true"/>
<hr>
<c:if test="true"><p>true</p></c:if>
<c:if test="TRUE"><p>TRUE</p></c:if>
<c:if test="True"><p>True</p></c:if>
<c:if test="trUe"><p>trUe</p></c:if>

<c:if test="false"><p>false</p></c:if>
<c:if test="aaaa"><p>aaaa</p></c:if>

<c:if test="name == '유관순'"><p>유관순1</p></c:if>

<c:if test="${name=='유관순'}"><p>유관순2</p></c:if>
<c:if test="${age=='20'}"><p>나이 20</p></c:if>
<c:if test="${working=='true'}"><p>일하고 있다.</p></c:if>
<c:if test="${working}"><p>일하고 있다.</p></c:if>

<c:if test="${working}" var="result">재직중<br></c:if>
####${pageScope.result}####

</body>
</html>
