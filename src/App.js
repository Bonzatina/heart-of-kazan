import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as AppActions from './actions/AppActions'

import logo from './img/LOGO.jpg';
import  first_img from './img/screen.png';
import second_img from './img/bugulma.jpg';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { placeholder: this.props.AppState.test};
    }

    handleScrollTop() {
        scroll(0,0);
    }

  render() {
    return (
      <div>
        <div className="App">

          <div className="App-header">

            <div className="top_line ">
            </div>

            <div className="main_menu">
              <div></div>
              <a className="main_menu__link">О ПРОЕТКЕ</a>
              <a className="main_menu__link">КАРТА</a>
              <a className="main_menu__link">ДОБАВИТЬ СВОЕ МЕСТО</a>
              <a className="main_menu__link">ГИД</a>
              <div></div>
            </div>

          </div>


            <div className="app_body ">

              <div className="background_line">
                <div className="diagonal"></div>
                <div className="diagonal2"></div>
              </div>

              <div className="slogan">
                THE OF KAZAN IS NOT THE KREMLIN!
              </div>
            </div>

            <div className="footer">
              <div className="">

              </div>

              <div className="">

              </div>

            </div>
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
