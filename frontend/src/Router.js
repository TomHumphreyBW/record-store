import React, { useState } from 'react';
import Records from './Records';
import ItemPage from './ItemPage';
import Searchbar from './Searchbar';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Router() {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/records">Records</Link>
                    </li>
                </ul>
                <Searchbar
                    setSearch={setSearch}
                    setSort={setSort}
                    sort={sort}
                />
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
                    <ItemPage>
                        One Record
                    </ItemPage>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

