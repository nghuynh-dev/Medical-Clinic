import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {Appointment, Contacts, Home, Reviews} from './index'
import NotFound from "../Components/NotFound";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import {createContext, useEffect, useState} from "react";
import Header from "../Components/Header";
import axios from "../services/base.service";

export const DataContext = createContext();
export const CalenderContext = createContext();
function App() {
    const [ date, setDate ] = useState(new Date());
    const [ doctor, setDoctor ] = useState([]);
    // console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate())
    const calenderContextValue = { date, setDate };
    const contextData = {
        doctor
    };

    //api doctor
    useEffect(() => {
            fetch('http://localhost:8000/api/doctor')
                .then((res) => res.json())
                .then((data) => {
                    setDoctor(data);
                });
        },
        [ doctor.length ]
    );
    return (
        <DataContext.Provider value={contextData}>
            <CalenderContext.Provider value={calenderContextValue}>
                <Router>
                    {localStorage.getItem("token")  ? (
                        <>
                            <Switch>
                                <Route path="/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route exact path="/">
                                    <Header />
                                    <Home />
                                </Route>
                                <Route path="/appointment">
                                    <Header />
                                    <Appointment />
                                </Route>
                                <Route path="/reviews">
                                    <Header />
                                    <Reviews />
                                </Route>
                                <Route path="/contact">
                                    <Header />
                                    <Contacts />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </>
                    ) : (
                        <Switch>
                            <Route exact path="/">
                                <Login />
                            </Route>
                            <Redirect from='*' to='/' />
                        </Switch>
                    )}
                </Router>
            </CalenderContext.Provider>
        </DataContext.Provider>
    );
}

export default App;
