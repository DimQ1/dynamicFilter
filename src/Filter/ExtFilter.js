import React from 'react';

export default function ExtFilter(props) {
    function renderItems(filterValues) {
        const handleClick = (event) => {
            props.selectItemAction(event.target.value);
        }
        const selectedId = filterValues.selectedId;

        return filterValues.items.map(item => {
            const selected = item.id === selectedId ? " Ext-filter__serch-value Ext-filter__serch-value_selected" : "Ext-filter__serch-value";
            return <li key={item.id} className={selected} value={item.id} onClick={handleClick}>{item.value}</li>;
        })
    }

    const { x, y } = props;

    return (
        <div className="Ext-filter" style={{ left: x, top: y }}>
            {renderItems(props.values)}
        </div>

    );
};

