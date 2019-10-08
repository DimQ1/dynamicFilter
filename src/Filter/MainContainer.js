
import React from 'react';
import Header from './Header';
import Dropdown from './Dropdown';
import Search from './Search';

export default class MainContainer extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = { y: 0, x: 0 };
    }

    mouseDown = (e) => {
        if (!e) {
            return;
        }

        this.hitOffset = {
            x: e.pageX - this.state.x,
            y: e.pageY - this.state.y,
        };
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('mouseup', this.mouseUp);
        e.preventDefault();
    }

    mouseMove = (e) => {
        if (!e) {
            return;
        }
        this.setState((prev) => {
            const position = {
                x: e.pageX - this.hitOffset.x,
                y: e.pageY - this.hitOffset.y
            };
            return { x: position.x, y: position.y };
        })
    }

    mouseUp = (e) => {
        if (!e) {
            return;
        }
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('mouseup', this.mouseUp);
    }
    render() {
        const { x, y } = this.state;

        return (
            <div className="Filter-contaner" style={{ left: x, top: y }}>
                <div className="Header-line_color-blue"></div>
                <Header onMousedown={this.mouseDown} />
                <div className="Row-container Row-container_background-b">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2">
                        <Dropdown name={'CONTEXT'} value={["serch1", "search2"]} />
                    </div>
                </div>
                <div className="Row-container Row-container_background-b">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2">
                        <Dropdown name={'DIMENSIONS'} value={["serch1", "search2"]} />
                    </div>
                </div>
                <div className="Row-container Row-container_background-b">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2">
                        <Search value={''} />
                    </div>
                </div>
                <div className="Row-container">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2 "></div>
                </div>
            </div >
        );
    }
}

MainContainer.defaultProps = {
    x: 0,
    y: 0
}