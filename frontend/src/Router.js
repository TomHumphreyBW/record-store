import React, { useState } from 'react';
import Records from './Records';
import ItemPage from './ItemPage';
import AccountPage from './AccountPage';
import Account from './Account';
import Searchbar from './Searchbar';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Icon } from '@brandwatch/axiom-components';

function Router() {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    return (
        <BrowserRouter>
            <div>
                <ul style={{ listStyleType:"none" }}>
                    <li>
                        <Link to="/">
                            <Icon name="home" size="2rem" color="white" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/records">
                            <Icon name="folder" size="2rem" color="white" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/account">
                            <Icon name="user" size="2rem" color="white" />
                        </Link>
                    </li>
                </ul>
                <Route exact path='/Records'>
                <Searchbar
                    setSearch={setSearch}
                    setSort={setSort}
                    sort={sort}
                />
                </Route>
                <hr />
            </div>

            <Switch>
                <Route exact path='/Records'>
                    <Records
                        searchText={search}
                        sort={sort}
                    />
                </Route>

                <Route exact path='/Records/:id'>
                    <ItemPage />
                </Route>
            
                <Route exact path='/Account'>
                    <AccountPage />
                </Route>
            </Switch>
        </BrowserRouter >
    );
}

export default Router;

