import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Dropdown(props) {
    const name = props.name;
    const value = props.value ? props.value.join(", ") : '';

    return (
        <div className="Drop-down">
            <div className="Row-container">
                <FontAwesomeIcon icon={faChevronDown} size="sm" color="white" />
                <div className="ml-10">
                    <span className="text-bold">{name}</span> {value}
                </div>
            </div>
        </div>
    );
};