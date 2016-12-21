import React, { Component } from 'react';

export default class HelloInput extends Component {

    constructor(props) {
        super(props);
        this.state = {text_area_edit: false};
    }
    componentDidUpdate() {
        this.setState({placeholder: 'aa'})
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChange_text_area_edit() {
        this.setState({text_area_edit: !this.state.text_area_edit});
    }

    render() {
        return <div>
            { this.state.text_area_edit ?
                <textarea className="hello_input"
                          placeholder={this.state.placeholder}
                          onChange={this.handleChange}/> :
                <div
                    className="hello_input__link"
                    onClick={this.handleChange_text_area_edit.bind(this)}>
                    +
                </div>}
        </div>
    }
}