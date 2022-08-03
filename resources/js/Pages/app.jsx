import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from "../Components/Header";
import {Home} from './index'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/*<Route path='/error' component={ErrorComponent} />*/}
                {/*<Redirect from='*' to='/error' />*/}
            </Switch>
        </Router>
    );
}

export default App;
