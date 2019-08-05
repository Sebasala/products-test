import React from 'react';
import MainNav from './MainNav';
import { Toolbar } from 'react-md';


const ContactsRoute = (props) => {
    return (
        <div className="contacts-page">
            <Toolbar
                colored
                fixed
                children={<MainNav />}
            />
            <h1 className="md-toolbar-relative">Contact</h1>
        </div>
    );
}
 
export default ContactsRoute;