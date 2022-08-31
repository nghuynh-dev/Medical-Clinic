import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Appointment, Contacts, Home, Reviews} from './index'
import NotFound from "../Components/NotFound";
import Login from "../Components/Login";
import {createContext, useEffect, useState} from "react";
import Header from "../Components/Header";
import ManageUser from "../Components/ManageUser";
import Repository from "../services/repository";
import ManageDoctor from "../Components/ManageDoctor";
import Dashboard from "../Components/Dashboard";
import MyBooking from "../Components/MyBooking";
import CreatePrescription from "../Components/CreatePrescription";

export const DataContext = createContext();
export const CalenderContext = createContext();

function App() {
    const [listPres, setListPres] = useState([]);
    const [date, setDate] = useState(new Date());
    const [userToken, setUserToken] = useState('')
    const [doctor, setDoctor] = useState([]);
    const [booking, setBooking] = useState([]);
    const [bookingId, setBookingId] = useState(undefined)
    const calenderContextValue = {date, setDate};

    useEffect(async () => {
        const endpoint = 'booking'
        const response = await Repository.get(endpoint)
        setBooking(response.data)

        const endpoint1 = 'user_token'
        const response1 = await Repository.get(endpoint1)
        setUserToken(response1?.data)

        const endpoint2 = 'doctor'
        const response2 = await Repository.get(endpoint2)
        setDoctor(response2?.data)
    }, [])

    const contextData = {
        doctor, userToken, booking, bookingId, setBookingId, listPres, setListPres
    };
    return (
        <DataContext.Provider value={contextData}>
            <CalenderContext.Provider value={calenderContextValue}>
                <Router>
                    {localStorage.getItem("token") ? (
                        <>
                            <Switch>
                                <Route exact path="/dashboard">
                                    <Dashboard/>
                                </Route>
                                <Route exact path="/dashboard/doctor">
                                    <ManageDoctor/>
                                </Route>
                                <Route exact path="/dashboard/user">
                                    <ManageUser/>
                                </Route>
                                <Route exact path="/dashboard/create-prescription">
                                    <CreatePrescription/>
                                </Route>
                                <Route exact path="/">
                                    <Header/>
                                    <Home/>
                                </Route>
                                <Route exact path="/appointment">
                                    <Header/>
                                    <Appointment/>
                                </Route>
                                <Route exact path="/my-booking">
                                    <Header/>
                                    <MyBooking/>
                                </Route>
                                <Route exact path="/reviews">
                                    <Header/>
                                    <Reviews/>
                                </Route>
                                <Route exact path="/contact">
                                    <Header/>
                                    <Contacts/>
                                </Route>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </>
                    ) : (
                        <Switch>
                            <Route exact path="/">
                                <Login/>
                            </Route>
                            <Redirect from='*' to='/'/>
                        </Switch>
                    )}
                </Router>
            </CalenderContext.Provider>
        </DataContext.Provider>
    );
}

export default App;
