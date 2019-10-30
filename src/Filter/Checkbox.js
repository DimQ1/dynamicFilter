import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: false }
    }

    componentDidMount() {
        this.setState({ isChecked: this.props.checked });
    }

    toggleCheckboxChange = () => {
        const { onChange, id } = this.props;

        this.setState(({ isChecked }) => {
            onChange({ id, isChecked: !isChecked });
            return { isChecked: !isChecked }
        });
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    {label}
                </label>
            </div>
        );
    }
}

export default Checkbox;