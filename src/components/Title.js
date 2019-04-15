import React from "react";

class Title extends React.Component {
    constructor() {
        super();
    }

    render() {

        //this.props.text - 부모로부터 넘겨받은 value를 getter로 읽는다 
        return(
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Title;

