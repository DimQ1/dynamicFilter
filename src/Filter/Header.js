import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const colorIcons = "#a8a9af";
    return (
        <div className="Filter-container__header">
            <div className="Row-container">
                <FontAwesomeIcon icon={faBars} rotation={90} color={colorIcons}/>
                <div className="ml-15 text-bold">FILTERS</div>
            </div>
            <button>
                <FontAwesomeIcon icon={faTimes} color={colorIcons} />
            </button>
        </div>
    );
};