import React from 'react';
import Checkbox from './Checkbox';

export default class DropdownItems extends React.Component {
    handleChenge = (event) => {
        const items = this.props.Items;
        this.props.setContext(items, event);
    }

    renderItems = () => {
        const items = this.props.Items;
        const renderItems = items.map((element, index) => {
            return <div key={index}>
                <Checkbox id={element.id} label={element.name} checked={element.checked} handleCheckboxChange={this.handleChenge} />
            </div>

        });

        return renderItems;
    }
    render() {
        if (this.props.Items && this.props.Items.length > 0) {
            const className = this.props.isDisplayItems ? "Dropdown-result-container Dropdown-result-container_border-top" :
                "Dropdown-result-container Dropdown-result-container_border-top Dropdown-result-container_hide"
            const renderedItems = this.renderItems();

            return (
                <div className={className} ref={this.dropdownRef}>
                    <div className="Dropdown-result-container__content">
                        {renderedItems}
                    </div>
                </div>
            );
        } else {
            return (<></>);
        }

    }
};