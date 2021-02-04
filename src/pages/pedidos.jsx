import React, { useState } from 'react';
import headerSG from '../images/sgheader.svg';
import {Transition} from '@headlessui/react';
import {useHistory, useLocation} from "react-router-dom";

import {DashboardLayout} from '../components/Layout';

class PedidosPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {visible: false};
  }

  componentDidMount(){
    this.setState({visible: true})
  }

  componentWillUnmount(){
    this.setState({visible: false});
  }

  render() {
    return(<DashboardLayout>
      <div className="flex flex-col space-4 h-screen">
          <Transition
            className="flex-grow pt-2 mr-2"
            show={this.state.visible}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="origin-top-right pedidos-header w-full bg-white bg-opacity-75 rounded-lg h-full shadow-lg"></div>
          </Transition>
          <Transition
            className="flex-grow h-3/5 py-2 lg:w-4/12 2xl:w-3/12"
            show={this.state.visible}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="list-items bg-white mb-2 rounded-lg bg-opacity-75 w-full h-full shadow-lg"></div>
          </Transition>
      </div>
    </DashboardLayout>)
  }
}

export default PedidosPage;