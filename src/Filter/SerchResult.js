import React from 'react';

export default function SerchResult(props) {
    const value = props.value;

    function renderItems() {
        if (!value) {
            return '';
        }
        const items = [];
        value.map((element, index) => {
            return <div key={index}>
                <label>
                    <input name="isGoing" type="checkbox" />
                    {element}
                </label>
            </div>

        });

        return items;
    }

    return (
        <div className="Search-result-container Search-result-container_border-top">
            <div className="Search-result-container__content">
                {renderItems()}
            </div>
        </div>
    );
};