import CGeometry from "../classes/Components/Geometry";
import CMaterial from "../classes/Components/Material";
import CPosition from "../classes/Components/Position";
import Entity from "../classes/Entity";

function createCube(x: number, y: number, z: number, size: number): Entity {
    const _entity = new Entity();
    _entity.add(new CPosition(z, y, z));
    _entity.add(new CMaterial('basic', 0x00ff00));
    _entity.add(new CGeometry());

    return _entity;
}