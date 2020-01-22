import React, { useState } from 'react';
import './Searchbar.css';
import SortDropdown from './SortDropdown.js';
import {
    TextInput,
    TextInputIcon,
    TextInputButton,
    TooltipContent,
    TooltipContext
} from '@brandwatch/axiom-components';

const Searchbar = ({ setSearch, setSort, sort }) => {
    const [innerSearch, setInnerSearch] = useState('')
    return (
        <div className="Searchbar">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setSearch(innerSearch)
                }}
            >
                <TextInput
                    length="short"
                    onChange={(event) => {
                        setInnerSearch(event.target.value)
                    }}
                    placeholder="Search albums"
                >
                    <TextInputIcon align="left" name="magnify-glass"
                        tooltip={
                            <TooltipContext color="carbon">
                                <TooltipContent>
                                    Search for an album
                                </TooltipContent>
                            </TooltipContext>
                        }
                    />
                    <TextInputButton color="positive">
                        Search
                    </TextInputButton>
                </TextInput>
            </form>
            <SortDropdown
                setSort={setSort}
                sort={sort}
            />
        </div>
    );
}

export default Searchbar;