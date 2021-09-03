import { loadComponents } from "./components";
import { store } from "./store";
function watchStore() {
    store.subscribe(() => {
        console.warn("Respuesta desdes main");
        console.log(store.getState());
    });
}
function main() {
    watchStore();
    loadComponents(true);
}
main();
//# sourceMappingURL=main.js.map