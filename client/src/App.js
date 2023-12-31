import React from "react";
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider} from "@react-oauth/google";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    return (
    <GoogleOAuthProvider>
    <BrowserRouter>
        <Container maxWidth="lg">
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Auth" exact component={Auth}></Route>
        </Switch>
       </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
    )
}

export default App;