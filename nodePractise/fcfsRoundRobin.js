class process {
    constructor(name, at, bt) {
        this.name = name
        this.at = at
        this.bt = bt
        this.rt = bt
    }

}
const processes = [
    new process('p1', 0, 8),
    new process('p2', 5, 2),
    new process('p3', 1, 7),
    new process('p4', 6, 3),
    new process('p5', 8, 5),
]

function rr(processes,tq){
    const queue = [...processes];
    let ct = 0;
    let wt = 0;
    let tat = 0;
    for(const process of processes){
        if(process.rt>0)
        {

        }
    }
}

rr(processes);
