import React from 'react';


function sortItems(a, b, order) {
    if (a.name > b.name) {
        return order === 1 ? 1 : -1;
    }
    if (a.name < b.name) {
        return order === 1 ? -1 : 1;
    }
    return 0;
}

function RenderItems({ value, order }) {
    if (!value || value.length === 0) {
        return '';
    }
    const sortedItems = value.sort((a, b) => sortItems(a, b, order));
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

export default function SerchResult(props) {
    return (
        <div className="Search-result-container Search-result-container_border-top">
            <div className="Search-result-container__content">
                <RenderItems value={props.value} order={props.order} />
            </div>
        </div>
    );
};