import React from 'react';

export default function ExtFilter(props) {
    function renderItems(filterValues) {
        let isVisible = true;
        return filterValues.map(item => {
            const selected = isVisible ? " Ext-filter__serch-value Ext-filter__serch-value_selected" : "Ext-filter__serch-value";
            isVisible = false;
            return <li key={item.id} className={selected}>{item.value}</li>;
        })
    }

    return (
        <div className="Ext-filter">
            {renderItems(props.values)}
        </div>

    );
};