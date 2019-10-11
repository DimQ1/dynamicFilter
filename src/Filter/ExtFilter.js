import React from 'react';

export default function ExtFilter(props) {
    function renderItems(filterValues) {
        const handleClick = (event) => {
            console.log(event);
        }
        let isVisible = true;
        return filterValues.map(item => {
            const selected = isVisible ? " Ext-filter__serch-value Ext-filter__serch-value_selected" : "Ext-filter__serch-value";
            isVisible = false;
            return <li key={item.id} className={selected} onClick={handleClick}>{item.value}</li>;
        })
    }

    const { x, y } = props;

    return (
        <div className="Ext-filter" style={{ left: x, top: y }}>
            {renderItems(props.values)}
        </div>

    );
};