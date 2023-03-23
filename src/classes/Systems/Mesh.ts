import Component from "../Component";
import Entity from "../Entity";
import System from "../System";

import * as THREE from 'three';
import CGeometry from "../Components/Geometry";
import CMaterial from "../Components/Material";
import { getScene } from "../../App";

export default class Mesh extends System {
    mount = (entity: Entity) => {
        const entityGeometry = entity
            .components.find(component => component.constructor.name === 'CGeometry');
        const entityMaterial = entity
            .components.find(component => component.constructor.name === 'CMaterial') ;

        if (entityGeometry && entityMaterial) {
            const { x, y, z } = entityGeometry as CGeometry;
            const { color } = entityMaterial as CMaterial;
            addBox(x, y, z, color);
        }
    }
}

function addBox(x, y, z, color) {
    const geometry = new THREE.BoxGeometry( x, y, z );
    const material = new THREE.MeshBasicMaterial( { color } );
    const cube = new THREE.Mesh(geometry, material);

    const scene = getScene();
    if (scene) {
      scene.add(cube);
    }
  }