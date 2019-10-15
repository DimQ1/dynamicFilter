import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchResult from './SerchResult';
import ExtFilter from './ExtFilter';
import { selectItem as filterSelectItem } from '../actions/extfilter'
import { selectItem as orderSelectItem } from '../actions/order'
import { connect } from 'react-redux';


function getFilteredItems(items, filter) {
    const expr = filter.expr;
    const newItems = items.filter(item => item.name.search(expr) !== -1);
    return newItems;
}

function Search(props) {
    const [inputValue, setInputValue] = useState('');
    const colorIcons = "#a8a9af";

    const { searchItems: resultValue, extFilter, extOrder, filterSelectItemAction, orderSelectItemAction,  } = props;
    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className="Search-container">
            <div className="Row-container">
                <FontAwesomeIcon icon={faSearch} color={colorIcons} />
                <input className="ml-10" type="text" value={inputValue} onChange={handleChange} />
            </div>
            <div className="Search-container__ext-filter">
                <div className="Row-container Row-container_aling-top">
                    <ExtFilter values={extFilter} x={0} y={0} selectItemAction={filterSelectItemAction} />
                    <ExtFilter values={extOrder} x={"40px"} y={0} selectItemAction={orderSelectItemAction} />
                </div>
            </div>
            <SearchResult value={getFilteredItems(resultValue.items, { ...extFilter, expr: inputValue })} order={extOrder.selectedId} />
        </div>
    );
};

const mapStateToProps = store => {
    return {
        searchItems: store.searchItems,
        extFilter: store.extFilter,
        extOrder: store.extOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterSelectItemAction: (id) => dispatch(filterSelectItem(id)),
        orderSelectItemAction: (id) => dispatch(orderSelectItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
