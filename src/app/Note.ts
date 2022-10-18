export class Note {
    sno: number
    title: string
    desc: string
    active: boolean
    constructor(data: any) {
        this.sno = data.sno || 0;
        this.title = data.title || '';
        this.desc = data.desc || '';
        this.active = data.active || false;
    }
}