import { combineReducers } from "redux";
function toggleColorReducer(state = 'color-system', action) {
    const target = document.querySelector('.wrapper');
    switch (action.type) {
        case '@color/toggle':
            if (state == 'color-system') {
                target.classList.replace('color-system', 'color-system--dark');
                return 'color-system--dark';
            }
            if (state == 'color-system--dark') {
                target.classList.replace('color-system--dark', 'color-system');
                return 'color-system';
            }
        default:
            return state;
    }
}
function toggleNavReducer(state = 'collapse', action) {
    const target = document.querySelector('.wrapper');
    switch (action.type) {
        case '@nav/toggle':
            if (state == 'collapse') {
                target.classList.replace('collapse', 'expand');
                return 'expand';
            }
            else {
                target.classList.replace('expand', 'collapse');
                return 'collapse';
            }
        default:
            return state;
    }
}
export const reducers = combineReducers({
    colorSystem: toggleColorReducer,
    nav: toggleNavReducer
});
//# sourceMappingURL=reducers.js.map