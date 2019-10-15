import React from 'react';

export default function SerchResult(props) {
    const value = props.value;
    const order = props.order;

    function renderItems() {
        if (!value || value.length === 0) {
            return '';
        }
        const sortedItems = value.sort(function (a, b) {
            if (a.name > b.name) {
                return order === 1 ? 1: -1;
            }
            if (a.name < b.name) {
                return order === 1 ? -1: 1;
            }
            // a должно быть равным b
            return 0;
        });
        const items = sortedItems.map((element, index) => {
            return <div key={element.id}>
                <label>
                    <input name="isGoing" type="checkbox" />
                    {element.name}
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