import { __decorate } from "tslib";
import { WrapperComponent } from "../../wrapper-component";
import { html } from 'lit';
import { property } from "lit/decorators.js";
import { style as globalStyle } from "../../style";
import { style as localStyle } from "./style";
import { store } from "../../../store";
export class Component extends WrapperComponent {
    handle() {
        store.dispatch({ type: '@color/toggle' });
    }
    render() {
        return html `
      <div class="${this.colorSystem} ${this.fontSystem}">
        <button 
          @click="${this.handle}"
          class="${this.icon} icon-contrast color-icon font-icon">
        </button>
      </div>
    `;
    }
}
Component.styles = [globalStyle, localStyle];
__decorate([
    property()
], Component.prototype, "icon", void 0);
//# sourceMappingURL=component.js.map