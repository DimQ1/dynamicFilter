import React, { useState } from 'react';

function RenderItems({ filterValues, onClick }) {

    const [isShowAllItems, setIsShowAllItems] = useState(false);

    const handleClick = (event) => {
        if (isShowAllItems) {
            onClick(event.target.value);
        }
        setIsShowAllItems(!isShowAllItems);
    }
    const selectedId = filterValues.selectedId;
    if (isShowAllItems) {
        return filterValues.items.sort((a, b) => {
            return a.id === selectedId ? -1 : 1;
        }).map(item => {
            const selected = " Ext-filter__serch-value";
            return <li key={item.id} className={selected} value={item.id} onClick={handleClick}>{item.value}</li>;
        })
    }

    const selectedItem = filterValues.items.filter(item => item.id === selectedId)[0];
    const selected = " Ext-filter__serch-value";
    return <li key={selectedItem.id} className={selected} value={selectedItem.id} onClick={handleClick}>{selectedItem.value}</li>;
}

export default function ExtFilter(props) {
    const { x, y, values, onClick } = props;
    return (
        <div className="Ext-filter" style={{ left: x, top: y }}>
            <RenderItems filterValues={values} onClick={onClick} />
        </div>
    );
};

