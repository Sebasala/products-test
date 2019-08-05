import React from 'react';
import MainNav from './MainNav';
import { Toolbar } from 'react-md';

const ClientsRoute = (props) => {
    return (
        <div className="clients-page">
            <Toolbar
                colored
                fixed
                children={<MainNav />}
            />
            <h1 className="md-toolbar-relative">Clients</h1>
        </div>
    );
}
 
export default ClientsRoute;