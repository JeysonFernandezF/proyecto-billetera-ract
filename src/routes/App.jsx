import React, { lazy, Suspense } from 'react'

import "../assets/styles/App.scss";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from '../components/NotFound';
import Billeteras from '../containers/Billeteras';



//const Billeteras = lazy(() => import('../containers/Billeteras'));

const App = () => (
  <BrowserRouter>
    <Layout>
        <Switch>
            
            <Route exact path='/' component={Billeteras}/>
            <Route component={NotFound} />
        </Switch>


    </Layout>



  </BrowserRouter>
)

export default App

