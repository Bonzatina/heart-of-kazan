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


  render() {
    return (
      <div className="container-fluid">


          <div className="App-header row">

            <div className="top_line ">
            </div>

            <div className="main_menu ">
              <a className="main_menu__link col-sm-3">О ПРОЕТКЕ</a>
              <a className="main_menu__link col-sm-2">КАРТА</a>
              <a className="main_menu__link col-sm-5">ДОБАВИТЬ СВОЕ МЕСТО</a>
              <a className="main_menu__link col-sm-2">ГИД</a>
            </div>

          </div>


            <div className="app_body row">

              <div className="background_line">
                <div className="diagonal"></div>
                <div className="diagonal2"></div>
              </div>

              <div className="col-sm-offset-5">
              <div className="slogan ">
                THE HEART OF KAZAN IS NOT THE KREMLIN!
              </div>
              </div>
            </div>

            <div className="footer row">
              <div className="">

              </div>

              <div className="">

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
