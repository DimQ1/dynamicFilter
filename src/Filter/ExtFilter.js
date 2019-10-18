import React from 'react';

function RenderItems({ filterValues, selectItemAction }) {
    const handleClick = (event) => {
        selectItemAction(event.target.value);
    }
    const selectedId = filterValues.selectedId;

    return filterValues.items.map(item => {
        const selected = item.id === selectedId ? " Ext-filter__serch-value Ext-filter__serch-value_selected" : "Ext-filter__serch-value";
        return <li key={item.id} className={selected} value={item.id} onClick={handleClick}>{item.value}</li>;
    })
}

export default function ExtFilter(props) {
    const { x, y, values, selectItemAction } = props;
    return (
        <div className="Ext-filter" style={{ left: x, top: y }}>
            <RenderItems filterValues={values} selectItemAction={selectItemAction} />
        </div>

    );
};

