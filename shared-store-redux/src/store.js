
import { configureStore, createSelector } from '@reduxjs/toolkit';
import { Observable } from 'rxjs';

const UPDATE_SETTINGS = '[settings] Update settings';
const DEFAAULT_SETTINGS_VALUE = 1;

function updateSettings(currentSettingsValue){
    return {
        type: 'UPDATE_SETTINGS',
        payload: currentSettingsValue,
    }
}

const bindUpdateSettings = (selectedOption) => Store.dispatch(updateSettings(selectedOption));

export function updateCurrentSettings(selectedOption) {
    console.log('updateCurrentSettings', selectedOption);
    bindUpdateSettings(selectedOption);
}

// export const settingsSelector = createSelector(getSettingsState, (value) => value);
export function getSettingsState() {
    return Store.getState().currentSettingsValue;
}

//const getSettingsState = state => state.currentSettingsValue;

//export const settingsSelector = createSelector(getSettingsState);


const Store = configureStore({ reducer: reducer_SETTINGS_update });

function reducer_SETTINGS_update(state = {currentSettingsValue: DEFAAULT_SETTINGS_VALUE}, action){
    switch(action.type){
        case 'UPDATE_SETTINGS':
            return {...state, currentSettingsValue: action.payload};
        default:
            return state;
    }
}

export default Store;
