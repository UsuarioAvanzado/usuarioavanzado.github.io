import { __decorate } from "tslib";
import { html } from 'lit';
import { WrapperComponent } from "../../wrapper-component";
import { state } from "lit/decorators.js";
import { style as globalStyle } from "../../style";
import { style as localStyle } from "./style";
import { store, toggleNav } from '../../../store';
export class Component extends WrapperComponent {
    constructor() {
        super(...arguments);
        this.icon = 'icon-bars';
    }
    connectedCallback() {
        super.connectedCallback();
        store.subscribe(() => {
            const state = store.getState()['nav'];
            switch (state) {
                case 'expand':
                    this.icon = 'icon-times';
                    break;
                default:
                    this.icon = 'icon-bars';
                    break;
            }
        });
    }
    handler() {
        store.dispatch(toggleNav);
    }
    render() {
        return html `
      <div class="${this.colorSystem} ${this.fontSystem} font-icon">
        <button @click="${this.handler}" class="font-icon color-icon ${this.icon}"></button>
      </div>
    `;
    }
}
Component.styles = [globalStyle, localStyle];
__decorate([
    state()
], Component.prototype, "icon", void 0);
//# sourceMappingURL=component.js.map