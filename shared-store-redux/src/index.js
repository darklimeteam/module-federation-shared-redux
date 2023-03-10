import { updateCurrentSettings } from './store';
import * as Store from './store';
import { storeSettings } from './store';//maybe will not work without this import

const element = document.getElementById("stateValue");
element.innerHTML = Store.getSettingsState(); //initial value
Store.default.subscribe(() => {
    element.innerHTML = Store.getSettingsState();
 });

const button0 = document.getElementById("button0");
button0.addEventListener("click", function () {
    updateCurrentSettings(0);
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
    updateCurrentSettings(1);
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
    updateCurrentSettings(2);
});