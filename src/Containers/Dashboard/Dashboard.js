// import React, { Component } from 'react';
// This is used for the old way of writing React

import React, { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import Header from '../../Components/Header/Header';
import { getWines } from '../../apiCalls';
import WineSearch from '../../Components/WineSearch/WineSearch'
import { HelperContext } from '../../Context/HelperContext';
import { useAuth0 } from '@auth0/auth0-react';


const Dashboard = () => {
  // const [wineStyle, setWineStyle] = useState('')
  // const [wineVintage, setWineVintage] = useState('')
  const [wineList, setWineList] = useState([])
  const { checkLoggedIn } = useContext(HelperContext);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    checkLoggedIn()
  },[user])

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
