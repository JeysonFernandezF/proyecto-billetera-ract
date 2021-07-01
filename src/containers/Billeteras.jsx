import React from 'react'

import "../assets/styles/components/Billeteras.scss";

import BilleterasList from '../components/BilleterasList';
import PageSection from '../components/PageSection';
//import {ErrorBoundary} from '../components/ErrorBoundary';


const Billeteras = () => (
    //<ErrorBoundary>
        <section className="billetera-section">
            <div className="billetera">
                <BilleterasList />
            </div>
            <div className="page-section">
                <PageSection /> 
            </div>
        </section>
    //</ErrorBoundary>
)

export default Billeteras
