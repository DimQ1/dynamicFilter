import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchResult from './SerchResult';
import ExtFilter from './ExtFilter';

export default function Search(props) {
    const colorIcons = "#a8a9af";
    const value = props.value;
    const resultValue = ["asad", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd", "aasdasd"];

    return (
        <div className="Search-container">
            <div className="Row-container">
                <FontAwesomeIcon icon={faSearch} color={colorIcons} />
                <input className="ml-10" type="text" value={value} />
            </div>
            <div className="Search-container__ext-filter">
                <div className="Row-container Row-container_aling-top">
                    <ExtFilter values={[{ value: "**", id: 1 }, { value: "*_", id: 2 }, { value: '""', id: 3 }]} />
                    <ExtFilter values={[{ value: "A-Z", id: 1 }, { value: "Z-A", id: 2 }]} />
                </div>
            </div>
            <SearchResult value={resultValue} />
        </div>
    );
};