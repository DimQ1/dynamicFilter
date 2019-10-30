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
            <Checkbox id={element.id} label={element.name} checked={element.checked} onChange={props.onChenge} />
        </div>

    });

    return renderItems;
}

export default class DropdownItems extends React.Component {
    handleChenge = (event) => {
        const { items } = this.props.value;
        this.props.onContextClick(items, event);
    }

    render() {
        const className = this.props.isDisplayItems ? "Dropdown-result-container Dropdown-result-container_border-top" :
            "Dropdown-result-container Dropdown-result-container_border-top Dropdown-result-container_hide";
        const { items, error } = this.props.value;
        return (
            <div className={className} ref={this.dropdownRef}>
                <div className="Dropdown-result-container__content">
                    <RenderItems Items={items} error={error} onChenge={this.handleChenge} />
                </div>
            </div>
        );
    }
};