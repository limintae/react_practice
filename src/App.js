//core파일 로드
import React from "react";
import ReactDOM from "react-dom";

import Todo from "./containers/Todo";

//dev dependencies에 있던 hot로더 로드
if(module.hot) {
  module.hot.accept();
}

//map util method, todo 매개변수
//key속성은 강제주입(리액트 접근성 문제?)
// const TodoLi = todos.map((todo, idx) => {
//   return (
//     <li key={"todo" + idx}>
//       <span>{todo}</span>
//       <span className="btn-container"><a href="#">삭제</a></span>
//     </li>
//   );
// });

//실제 화면에 랜더링될 JSX
//bundls.js에서 번들링된(브라우저 실행가능한) 소스로 변환된다.
//<AddLi/>는 new AddLi(); 와 같은 객체를 생성한 효과(인스턴스 생성).
ReactDOM.render(
  <Todo/>,
  document.getElementById("app")
);


