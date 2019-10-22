import React from 'react';
import Header from './Header';
import Dropdown from './Dropdown';
import Search from './Search';
import { setCheckedContext } from '../actions/setCheckedContext'
import { setCheckedDimensions } from "../actions/setDimensions";
import { removeSearchItemsByIds } from "../actions/setSearchItems";
import fetchContextAction from '../actions/fetchContext';
import fetchDimensionsAction from '../actions/fetchDimensions';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = { y: 0, x: 0 };
    }

    componentDidMount() {
        this.props.fetchContexts();
        this.props.fetchDimensions();
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
        const { context, dimensions, setCheckedContextAction, setCheckedDimensionsAction, removeSearchItemsByIdsAction } = this.props;
        if (dimensions.removeIds.length > 0) {
            removeSearchItemsByIdsAction(dimensions.removeIds)
        }

        return (
            <div className="Filter-contaner" style={{ left: x, top: y }}>
                <div className="Header-line_color-blue"></div>
                <Header onMousedown={this.mouseDown} />
                <div className="Row-container Row-container_background-b">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2">
                        <Dropdown name={'CONTEXT'} value={context} setContext={setCheckedContextAction} />
                    </div>
                </div>
                <div className="Row-container Row-container_background-b">
                    <div className="Row-container__Col-1 Row-container__Col-1_border-r"></div>
                    <div className="Row-container__Col-2">
                        <Dropdown name={'DIMENSIONS'} value={dimensions} setContext={setCheckedDimensionsAction} />
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

const mapStateToProps = store => {
    return {
        context: store.context,
        dimensions: store.dimensions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCheckedContextAction: (items, checkedItem) => dispatch(setCheckedContext(items, checkedItem)),
        setCheckedDimensionsAction: (items, checkedItem) => dispatch(setCheckedDimensions(items, checkedItem)),
        removeSearchItemsByIdsAction: (ids) => dispatch(removeSearchItemsByIds(ids)),
        fetchContexts: () => dispatch(fetchContextAction()),
        fetchDimensions: () => dispatch(fetchDimensionsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);