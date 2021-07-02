import React, { lazy, Suspense } from 'react'

import "../assets/styles/App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from '../components/NotFound';

const Billeteras = lazy(() => import('../containers/Billeteras'));

const App = () =>  (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense 
            fallback={
              <div className="cargando">
                Cargando
              </div>
            }
          >
            <Route exact path='/' component={Billeteras}/>
          </Suspense>
          
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )


export default App

