import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as AppActions from './actions/AppActions'

import logo from './LOGO.jpg';
import  first_img from './screen.png';
import second_img from './bugulma.jpg';
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

        <div className="App-header">
            <div className="enter_button "></div>
            <div className="vid">
            <video autoPlay  loop="loop" className="video"  >
                    <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
            </div>
            <Link to="/" onClick={scroll(0,0)}><img src={logo} className="col-sm-2 col-md-1 App-logo" alt="logo" /></Link>
        </div>

          <div className="container-fluid">
          <div className="app_body row">

              <div className=" col-sm-offset-2 col-md-offset-1 col-sm-3 col-md-3">
                  <div className="menu">
                      / РАХИМ ИТЕГЕЗ / <Link to="/about" >МИН КАЯ? /</Link> <br/>
                      <a>/МАРШРУТ ПОСТРОЕН/</a>  <a >БУГУЛЬМА/</a><br/>
                       КВАРТАЛА / ЭЧПЕЧМАК / <br/>
                       / РЕЧНОЙ ПОРТ /<br/>
                      / ФОТОГРАФ / ПРАВИЛА / <br/>
                      / ГАСТРОНОМ / МАНДАРИНКА / <br/>
                      / ПИРАЖОК / <a > ДУСЛАР</a>/<br/>
                      <br/>
                      / ДОЯРКА / ЛОШАДКА /
                  </div>
                  <div className="pics">
                      <img className="first_img" src={first_img}>
                      </img>

                      <img className="second_img" src={second_img}>
                      </img>
                  </div>
              </div>
              <div className="col-sm-6 col-md-5">
              <div className="text_area">
                  {this.props.children}
              </div>

              </div>
        </div>

        <div className="footer row">
            <div className=" col-sm-4 col-md-4 "><div className="footer_col_first">Ключи: отъезжают</div></div>
            <div className=" col-sm-2 col-md-2"><div className="footer_col">Водка. Медь. Бронирование.</div></div>
            <div className=" col-sm-6 col-md-6"><div className="footer_col">Все реально поцекано, перецекано и уцекано(с)</div></div>
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
