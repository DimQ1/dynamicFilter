import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import DropdownItems from './DropdownItems';
export default class Dropdown extends React.Component {
    className = "Drop-down";
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
        if (event.currentTarget.contains(event.target)) {
            this.setState((prev) => {
                return { isDisplayItems: prev.isDisplayItems ? false : true }
            })
        }
    }

    render() {
        const name = this.props.name;
        const selectedItems = this.getSelectedItems();
        const items = this.state.items;
        const isDisplayItems = this.state.isDisplayItems;
        return (
            <>
                <div className={this.className} onClick={this.handleClick}>
                    <div className="Row-container"  >
                        <FontAwesomeIcon icon={faChevronDown} size="sm" color="white" />
                        <div className="ml-10">
                            <span className="text-bold">{name}</span> {selectedItems}
                        </div>
                    </div>
                </div>
                <DropdownItems Items={items} isDisplayItems={isDisplayItems} />
            </>
        );
    }
};