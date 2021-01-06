import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route path='/service' component={Service} />
                <Route path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </>
    );

}

export default App;