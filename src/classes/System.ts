import Component from "./Component";
import Entity from "./Entity";

export default class System {
    mount = (entity: Entity): void => {}
    update = (entity: Entity): void => {}
    unmount = (entity: Entity): void => {}

    run = (entities: Entity[]) => {
        entities.forEach(entity => {
            /* Run setup on unmounted components */
            if (!entity.mounted) {
                this.mount(entity);
                entity.mounted = true;
            }

            /* Run update on all components */
            this.update(entity);

            /* TODO: discard stale entity */
            if (entity.stale) this.unmount(entity);
        });
    }
}