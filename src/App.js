import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as AppActions from './actions/AppActions'

import logo from './img/LOGO.jpg';
import  first_img from './img/screen.png';
import second_img from './img/bugulma.jpg';
import video from './img/kazan_video_glav.mp4';
import vk_img from './img/vk.png'
import fb_img from './img/fb.png'

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
    return (<div>
      <div className="App">

        <div className="App-header">
            <div className="top_line ">
                <div className="media_icons">
                    <div className="buttons">
                        <a className="enter_button"> Войти</a>
                        <a className="enter_button"> Добавить место</a>
                    </div>
                    <a href="https://vk.com/samizdat_kazan" target="balnk"><img className="media_icon" alt="vk"  src={vk_img}/></a>
                    <a href="https://www.facebook.com/heartofkazan/?fref=ts" target="blank"> <img className="media_icon" alt="fb" src={fb_img}/> </a>
                    <div className="lang_button">EN</div>
                </div>
            </div>
            <div className="vid">
            <video autoPlay  loop="loop" className="video"   width={window.innerWidth > 767 ? '100%' : '150%'}>
                    <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
            </div>
            <Link to={window.location.pathname !== '/' ? '/' : null} onClick={this.handleScrollTop}><img src={logo} className="col-sm-2 col-md-1 App-logo" alt="logo" /></Link>
        </div>

          <div className="container-fluid">
          <div className="app_body row">

              <div className=" col-sm-offset-2 col-md-offset-1 col-sm-3 col-md-3">
                  <div className="menu">
                      <Link to="/"> / РАХИМ ИТЕГЕЗ /</Link> <Link to="/about" >МИН КАЯ? /</Link> <br/>
                      <Link to="/map">/МАРШРУТ ПОСТРОЕН/</Link>  <Link href="http://inde.io/article/304-balzam-na-dushu" target="blank" >БУГУЛЬМА/</Link><br/>
                       КВАРТАЛА / ЭЧПЕЧМАК / <br/>
                       / РЕЧНОЙ ПОРТ /<br/>
                      / ФОТОГРАФ / ПРАВИЛА / <br/>
                      / ГАСТРОНОМ / МАНДАРИНКА / <br/>
                      / ПИРАЖОК / <a > ДУСЛАР</a>/<br/>
                      <br/>
                      / ДОЯРКА / ЛОШАДКА /
                  </div>
                  {window.location.pathname == '/' ? null : <div className="pics">
                      <img className="first_img" alt="img1" src={first_img}>
                      </img>

                      <img className="second_img" alt="img2" src={second_img}>
                      </img>
                  </div>}

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
