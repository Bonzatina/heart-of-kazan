import React, { Component } from 'react';

export default class HelloInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text_area_edit: false,
            placeholder: 'Привет!',
        };
    }
    // componentDidUpdate() {
    //     this.setState({placeholder: 'Привет'})
    // }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChange_text_area_edit() {
        this.setState({text_area_edit: !this.state.text_area_edit});
    }

    render() {
        return <div
            onMouseEnter={this.handleChange_text_area_edit.bind(this)}
            onMouseLeave={this.handleChange_text_area_edit.bind(this)}>
            { this.state.text_area_edit ?
                <textarea autoFocus={this.state.text_area_edit} className="hello_input"
                          placeholder={this.state.placeholder}
                          value={this.state.value || ""}
                          onChange={this.handleChange.bind(this)}/> :
                <div
                    className="hello_input__link"


                >
                    +
                </div>}
        </div>
    }
}