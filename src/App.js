import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";

import * as AppActions from './actions/AppActions'

import logo from './img/LOGO.jpg';
// import  first_img from './img/screen.png';
import first_img from './img/bugulma.jpg';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          placeholder: this.props.AppState.test,

        };
    }

  componentDidMount () {

      const menuItemLeft = this.refs.menuItem.getBoundingClientRect().left;

     // console.log( this.refs.menuItem.getBoundingClientRect());
    this.setState({
      sloganLeft: menuItemLeft
    })
  }

  render() {
    return (
      <div>
        <div className="App">

          <div className="App-header">

            <div className="top_line ">
            </div>

            <div className="main_menu">

              <a className="main_menu__link">О ПРОЕТКЕ</a>
              <a className="main_menu__link">КАРТА</a>
              <a className="main_menu__link" ref="menuItem">ДОБАВИТЬ СВОЕ МЕСТО</a>
              <a className="main_menu__link">ГИД</a>

            </div>

          </div>


            <div className="app_body ">

              <div className="background_line">
                <div className="diagonal"></div>
                <div className="diagonal2"></div>
              </div>

              <div className="slogan" ref='slogan' style={{left: this.state.sloganLeft}}>
                THE HEART OF KAZAN <br /> IS NOT THE KREMLIN!
              </div>

              <div className="info_block">
                <div className="info_block__top_text">
                  Арт-зин как гид по городу, главное отличие которого в том, что в нем нет классических экскурсионных маршрутов,
                  общеизвестных достопримечательностей и нагромождения исторических фактов.
                  <br /> <br />
                  Большей частью содержит в себе увлекательные исследования города в форме художественного очерка, а также красивейшие фото-истории
                </div>
                <div className="info_block__bottom_text">
                  Выбор мест продиктован не коммерческой успешностью, а личными предпочтениями жителей города и авторским видением.
                </div>
              </div>
              <img className="first_img" src={first_img}/>
              <div className="map">
                <GoogleMapLoader
                  containerElement={
                    <div

                      style={{
                        height: "100%",
                      }}
                    />
                  }
                  googleMapElement={
                    <GoogleMap
                      ref={(map) => console.log(map)}
                      defaultZoom={14}
                      defaultCenter={{ lat: 55.797774, lng: 49.121631}}

                    >
                      <Marker position={{ lat: 55.797774, lng: 49.121631}}
                      />
                      <Marker position={{ lat: 55.7917, lng: 49.125411}}
                      />
                      <InfoWindow
                        position={{ lat: 55.797774, lng: 49.121631}}

                      >
                        Хорошее место
                      </InfoWindow>

                    </GoogleMap>
                  }
                />
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
