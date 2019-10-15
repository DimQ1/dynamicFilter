import { addItemsDimensions, removeDimensionsItems } from "./setDimensions";
import { setChecked } from './context';
export function setCheckedContext(items, checked) {
  return dispatch => {
    const { id, isChecked } = checked;
    const updatedState = items.map(item => {
      if (item.id === id) {
        item.checked = isChecked;
      }
      return item;
    });
    dispatch(setChecked(updatedState));
    if(isChecked){
      dispatch(addItemsDimensions(id));
    }else{
      dispatch(removeDimensionsItems(id));
    }
  };
}
