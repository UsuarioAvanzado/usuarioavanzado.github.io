import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { state } from "lit/decorators.js";
import { store } from "../../../store";
export class Component extends LitElement {
    constructor() {
        super(...arguments);
        this.fontSystem = 'font-system';
    }
    connectedCallback() {
        super.connectedCallback();
        this.colorSystem = store.getState()['colorSystem'];
        store.subscribe(() => {
            this.colorSystem = store.getState()['colorSystem'];
        });
    }
}
__decorate([
    state()
], Component.prototype, "colorSystem", void 0);
__decorate([
    state()
], Component.prototype, "fontSystem", void 0);
//# sourceMappingURL=component.js.map