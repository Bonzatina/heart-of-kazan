import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as AppActions from './actions/AppActions'

import logo from './LOGO.jpg';
import video from './kazan_video_glav.mp4';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { placeholder: this.props.AppState.test};
    }

    render() {
        return (<div>
                <div className="App">
                    <div className="top_line"></div>
                    <div className="App-header">
                        <div className="enter_button"></div>
                        <Link to="/" onClick={scroll(0,0)}><img src={logo} className="App-logo" alt="logo" /></Link>

                    </div>
                    <div className="app_body">
                        <div className="menu">
                            / Рахим итегез / <Link to="/about" >Мин кая?</Link> / <a>Маршрут построен</a> / КварталА /<br/>
                            <a >/ Дуслар</a>  / <a >Бугульма</a> /<br/>
                            / <a >Место силы –></a> / Парк Горького / Зур Кызыл / Щапова, 18 /<br/>
                            / I&I / Фукса сад / <a >Гастроном </a> / На Булак / Лядской сад /<br/>
                            / Маяковского / Карла Маркса / Муштари / НКЦ / Мирумир /<br/>
                            / Сковородка / Нижний Кабан / На Черное озеро / И алга! /<br/>
                        </div>
                        <div className="middle_body">
                            <div className="text_area">
                                {this.props.children}
                            </div>
                            <div className="picture">Гог-ло!</div>
                        </div>
                    </div>



                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload!
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        AppState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AppActions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
