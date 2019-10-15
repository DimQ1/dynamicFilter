import { setChecked, removeItems } from './dimensions';
import { addSearchItems, removeSearchItems } from './setSearchItems'
import fetchDimensions from './fetchDimensions';
export function setCheckedDimensions(items, checked) {
  return dispatch => {
    const { id, isChecked } = checked;
    const updatedState = items.map(item => {
      if (item.id === id) {
        item.checked = isChecked;
      }
      return item;
    });
    dispatch(setChecked(updatedState));
    if (isChecked) {
      dispatch(addSearchItems(id));
    } else {
      dispatch(removeSearchItems(id));
    }

  };
}

export function addItemsDimensions(idsContext) {
  return dispatch => dispatch(fetchDimensions(idsContext));
}

export function removeDimensionsItems(contextId) {
  return dispatch => {
    dispatch(removeItems(contextId))
  };
}
