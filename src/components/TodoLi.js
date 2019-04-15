import React from "react";

class TodoLi extends React.Component {
    constructor() {
        super();
        this.onClickRemoveButtonFn = this.onClickRemoveButton.bind(this);
    }

    onClickRemoveButton() {
        //console.log(this.props.todo);
        //실제로는 element id를 보내야한다
        this.props.handleRemovedData(this.props.todo);
    }

    render() {
        //react는 root가 필요하니 div로 감싸준다
        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container">
                    <a href="#" onClick={this.onClickRemoveButtonFn}>삭제</a>
                </span>
            </li>
        );
    }
}

export default TodoLi;