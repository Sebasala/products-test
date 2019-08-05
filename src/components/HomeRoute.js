import React from 'react';
import MainNav from './MainNav';
import { Toolbar } from 'react-md';

const HomeRoute = (props) => {
    return (
        <div className="home-page">
            <Toolbar
                colored
                fixed
                children={<MainNav />}
            />
            <h1 className="md-toolbar-relative">Home</h1>
        </div> 
    );
}
 
export default HomeRoute;