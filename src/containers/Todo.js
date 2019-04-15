import React from "react";

//component 파일 로드
import AddLi from "../components/AddLi";
import Title from "../components/Title";
import TodoLi from "../components/TodoLi";
import { throws } from "assert";

//containers에서 변수 관리(state정의로 인해 삭제)
// const text = "To do list";
// const todos = [
//     "이것도 해야 되고",
//     "저것도 해야 되고",
//     "그것도 해야 되고",
//     "언제 다 하나"
// ];

class Todo extends React.Component {
    constructor() {
        super();
        //빈 객체 생성
        this.state = {
            text: "",
            todos: []
        }; 

        this.handleAddedDataFn = this.handleAddedData.bind(this);
        this.handleRemovedDataFn = this.handleRemovedData.bind(this);
    }

    //LifeCycle 테스트
    //실제 로그로 확인해보면 변경된시점에만 render된다
    componentWillMount() { //component가 랜더링 되기 이전
        console.log('componentWillMount'); 
    }

    componentDidMount() { //랜더링이 완료됬다
        console.log('componentDidMount');
        //ajax호출 데이터라 가정할경우 componentDidMount시점에서 정의
        // ajax.get("/todo")
        //     .done((data) => data = data)
        //     .fail()
        
        const returnedText = "To do list";
        const returnedTodos = [
            "이것도 해야 되고",
            "저것도 해야 되고",
            "그것도 해야 되고",
            "언제 다 하나"
        ];

        //debugger;

        //setState가 일어나면서 자동으로 랜더가 시작된다
        this.setState((prevState) =>{
            return {
                text: returnedText,
                todos: returnedTodos
            };
        });
    }

    componentWillReceiveProps() { 
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddedData(todo) {
        //추가를 함과 동시에 화면이 갱신되어야함.
        //prevState이전 상대값이 항상 딸려나온다 임의 변수정의
        this.setState((prevState) => {
            const todos = prevState.todos;
            todos.push(todo);

            return {
                todos: todos
            }
        });
    }

    handleRemovedData(todo) {
        this.setState((prevState) => {
            const todos = prevState.todos;
            //클릭한 값의 배열 인덱스 추출
            const index = todos.indexOf(todo);

            todos.splice(index, 1);

            return {
                todos: todos
            };
        });
    }

    render() {
        console.log('render');
        //class명과 겹치니 소문자로
        const todoLi = this.state.todos.map((todo, idx) => {
            return (
                <TodoLi todo={todo} key={"todo" + idx} handleRemovedData={this.handleRemovedDataFn}/>
            );
        });

        return (
            <div className="container">
                <Title text={this.state.text} />
                <AddLi handleAddedData={this.handleAddedDataFn}/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Todo;