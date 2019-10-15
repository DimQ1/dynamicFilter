import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import DropdownItems from './DropdownItems';

export default class Dropdown extends React.Component {
    className = "Drop-down";
    constructor(props) {
        super(props);
        this.state = { isDisplayItems: false };
        this.dropdownRef = React.createRef();
    }

    getSelectedItems() {
        return this.props.items ?
            this.props.items.filter(item => item.checked === true).map(item => item.name).join(", ") :
            '';
    }

    handleWindowClick = (event) => {
        if (!this.dropdownRef.current.contains(event.target)) {
            this.setState({ isDisplayItems: false });
            document.removeEventListener("click", this.handleWindowClick);
        }
    }

    addorRemoveEventListenerClick = (isAdd) => {
        if (isAdd) {
            document.addEventListener("click", this.handleWindowClick);
        } else {
            document.removeEventListener("click", this.handleWindowClick);
        }
    }

    handleClick = (event) => {
        if (event.currentTarget.contains(event.target)) {
            this.setState((prev) => {
                this.addorRemoveEventListenerClick(!prev.isDisplayItems);
                return { isDisplayItems: !prev.isDisplayItems }
            })
        }
    }

    render() {
        const { name, items, setContext } = this.props;
        const selectedItems = this.getSelectedItems();
        const isDisplayItems = this.state.isDisplayItems;
        return (
            <div ref={this.dropdownRef}>
                <div className={this.className} onClick={this.handleClick}>
                    <div className="Row-container"  >
                        <FontAwesomeIcon icon={faChevronDown} size="sm" color="white" />
                        <div className="ml-10">
                            <span className="text-bold">{name}</span> {selectedItems}
                        </div>
                    </div>
                </div>
                <DropdownItems Items={items} isDisplayItems={isDisplayItems} setContext={setContext} />
            </div>
        );
    }
};
