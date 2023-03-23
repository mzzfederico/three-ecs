import Component from "./Component";

export default class Entity {
    hidden: boolean = false;
    mounted: boolean = false;
    stale: boolean = false;

    components: Component[] = [];

    add(newComponent: Component) {
        this.components.push(newComponent);
    }

    setVisibility = (status: boolean) => this.hidden = status;
}