import React from 'react';
import Checkbox from './Checkbox';

function RenderItems(props) {
    const { Items, error } = props;

    if (error) {
        return (<div> {error.message}</div>);
    }

    if (!Items || Items.length === 0) {
        return <div>no items</div>
    }

    const renderItems = Items.map((element, index) => {
        return <div key={index}>
            <Checkbox id={element.id} label={element.name} checked={element.checked} handleCheckboxChange={props.handleChenge} />
        </div>

    });

    return renderItems;
}

export default class DropdownItems extends React.Component {
    handleChenge = (event) => {
        const { Items } = this.props;
        this.props.setContext(Items, event);
    }

    render() {
        const className = this.props.isDisplayItems ? "Dropdown-result-container Dropdown-result-container_border-top" :
            "Dropdown-result-container Dropdown-result-container_border-top Dropdown-result-container_hide";
        const { items, error } = this.props.value;
        return (
            <div className={className} ref={this.dropdownRef}>
                <div className="Dropdown-result-container__content">
                    <RenderItems Items={items} error={error} handleChenge={this.handleChenge} />
                </div>
            </div>
        );
    }
};