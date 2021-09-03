import { Component as ArticleComponent } from "./article";
import { Component as CollapseExpand } from "./collapse-expand";
import { Component as ToggleTheme } from "./toggle-theme";
import { Component as HeaderComponent } from "./header";
export function loadComponents(action) {
    if (action) {
        customElements.define('article-component', ArticleComponent);
        customElements.define('collapse-expand', CollapseExpand);
        customElements.define('toggle-theme', ToggleTheme);
        customElements.define('header-component', HeaderComponent);
    }
}
//# sourceMappingURL=index.js.map