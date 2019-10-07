import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import DropdownItems from './DropdownItems';
export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], isDisplayItems: false };
    }

    componentDidMount() {
        this.setState((prev) => {
            return { ...prev, items: [{ name: "item1", checked: true }, { name: "item2", checked: false }] };
        });
    }

    getSelectedItems() {
        return this.state.items ?
            this.state.items.filter(item => item.checked === true).map(item => item.name).join(", ") :
            '';
    }

    handleClick = (event) => {
        this.setState((prev) => {
            return { ...prev, isDisplayItems: prev.isDisplayItems ? false : true }
        })
    }

    render() {
        const name = this.props.name;
        const selectedItems = this.getSelectedItems();
        const items = this.state.items;
        const isDisplayItems = this.state.isDisplayItems;
        return (
            <div className="Drop-down">
                <div className="Row-container">
                    <FontAwesomeIcon icon={faChevronDown} onClick={this.handleClick} size="sm" color="white" />
                    <div className="ml-10">
                        <span className="text-bold">{name}</span> {selectedItems}
                    </div>
                </div>
                <DropdownItems Items={items} isDisplayItems={isDisplayItems}/>
            </div>
        );
    }
};