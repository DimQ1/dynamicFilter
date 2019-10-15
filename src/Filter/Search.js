import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchResult from './SerchResult';
import ExtFilter from './ExtFilter';
import { connect } from 'react-redux';

function Search(props) {
    const colorIcons = "#a8a9af";
    const value = props.value;
    const resultValue = props.searchItems;

    return (
        <div className="Search-container">
            <div className="Row-container">
                <FontAwesomeIcon icon={faSearch} color={colorIcons} />
                <input className="ml-10" type="text" value={value} />
            </div>
            <div className="Search-container__ext-filter">
                <div className="Row-container Row-container_aling-top">
                    <ExtFilter values={[{ value: "**", id: 1 }, { value: "*_", id: 2 }, { value: '""', id: 3 }]} x={0} y={0} />
                    <ExtFilter values={[{ value: "A-Z", id: 1 }, { value: "Z-A", id: 2 }]} x={"40px"} y={0} />
                </div>
            </div>
            <SearchResult value={resultValue.items} />
        </div>
    );
};

const mapStateToProps = store => {
    return {
        searchItems: store.searchItems
    }
}

export default connect(mapStateToProps)(Search);
