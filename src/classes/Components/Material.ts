import Component from "../Component";

export default class CMaterial extends Component {
    type: string = 'basic';
    color: number = 0x00ff00;

    constructor(type: string, color: number) {
        super();
        this.type = type;
        this.color = color;
    }
}