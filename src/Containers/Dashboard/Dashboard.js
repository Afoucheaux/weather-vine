// import React, { Component } from 'react';
// This is used for the old way of writing React

import React, { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import Header from '../../Components/Header/Header';
import { getWines } from '../../apiCalls';
import WineSearch from '../../Components/WineSearch/WineSearch'
import { StylingContext } from '../../Context/StylingContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';


const Dashboard = () => {
  // const [wineStyle, setWineStyle] = useState('')
  // const [wineVintage, setWineVintage] = useState('')
  const [wineList, setWineList] = useState([])
  const { setToHide } = useContext(StylingContext);
  const { user } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    checkLoggedIn()
  },[user])

  const checkLoggedIn = () => {
    if (user === undefined || user === false) {
      setToHide('hidden')
      history.push('/')
      return
    } else {
      setToHide('')
      history.push('/Dashboard')
    }
  }

  // useEffect(() => {
  //   getWines(wineStyle, wineVintage)
  //   .then(wines => setWineList(wines))
  // }, [wineList])

  // searchWine((style, vintage) => {
  //   getWines(style, vintage)
  //   .then(wines => setWineList(wines))
  // })


  return (
    <main>
      <Header />
      <WineSearch />
    </main>
  )
}

// class Dashboard extends Component {
//   constructor(props) {
//     super(props)
//     this.state= {
//       wineStyle: '',
//       wineVintage: '',
//       wineList: []
//     }
//   }
//   componentDidMount() {
//     let style = this.state.wineStyle;
//     let vintage = this.state.wineVintage;
//     getWines(style, vintage)
//     .then(wines => {
//       this.setState(wineList: wines)
//     })
//   }
//
//   render() {
//     return (
//       <main>
//         <Header />
//       </main>
//     )
//   }
// }
// this is the old way of writing React without hooks



export default Dashboard;
