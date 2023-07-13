// let input  = process.argv.slice(2)
// //const innumber = input.map((x)=>Number(x))
// let process array 
// for (const a of input){
// }
class Process {
    constructor(name, arrivalTime, burstTime) {
      this.name = name;
      this.arrivalTime = arrivalTime;
      this.burstTime = burstTime;
    }
  }
  
  function fcfs(processes) {
    // Sort the processes based on arrival time
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);
  
    let currentTime = 0;
    let waitingTime = 0;
    let turnaroundTime = 0;
  
    for (const process of processes) {
        console.log(process)
       
        
        waitingTime =  currentTime - process.arrivalTime 
        console.log({waitingTime})
        currentTime+= process.burstTime;
        console.log({currentTime})
        turnaroundTime = currentTime - process.arrivalTime
        console.log({turnaroundTime})
    }
  
  }
  
  // Example usage
  const processes = [
    new Process("P1", 0, 5),
    new Process("P2", 4, 3),
    new Process("P3", 2, 8),
  ];
  
  fcfs(processes);
  