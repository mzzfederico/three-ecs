import Component from "../Component";

export default class CPosition extends Component {
    x: number = 0
    y: number = 0
    z: number = 0

    constructor(
        x: number = 0,
        y: number = 0,
        z: number = 0
    ) {
        super();
        this.setPosition(x, y, z);
    }

    setPosition = (
        x: number = this.x,
        y: number = this.y,
        z: number = this.z
    ) => {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}