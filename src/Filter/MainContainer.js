
import React from 'react';
import Header from './Header';
import Dropdown from './Dropdown';
import Search from './Search';

export default function MainContainer() {
    return (
        <div className="Filter-contaner" draggable>
            <div className="Header-line_color-blue"></div>
            <Header />
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
        </div>
    );

}

