import React from "react";

//class name = 파일명 , 코딩 컨벤션
class AddLi extends React.Component {
    //생성자 (생략가능)
    constructor() {
        //부모클래스 생성자 실행
        super();
        //(1)현재의 this를 강제로 binding한다(컨텍스트 스위칭)
        this.onClickAddButtonFn = this.onClickAddButton.bind(this);
    }

    //callback정의
    onClickAddButton() {
        console.log("input text");
        //(1)과정을 거치지않으면 객체를 잘못 잡아 오류
        console.log(this.inputBox.value);
        //Todo.js(부모)의 메소드 handleAddedData
        this.props.handleAddedData(this.inputBox.value);
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                <input ref={input => {this.inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
                <span className="input-group-btn">
                    <button onClick={this.onClickAddButtonFn} className="btn btn-primary" type="button">등록</button>
                </span>
            </div>
        );
    }
}

//AddLi라는 클래스를 다른파일에서 사용할 수 있도록 설정한다 (import 가능하도록 설정)
export default AddLi;
