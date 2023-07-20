
// adjaceny matrix
// const matrx =[
//     [0,1,0], //for A
//     [1,0,1],//for vertex B 
//     [0,1,0] //for vertex c
// ]
// console.log(matrx[1][2])

// //adjacency list 

// adjList = {
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjList['B'])

class Graph{
    constructor(){
        this.adjList ={}
    }

    addVertex(vertex){
      if(!this.adjList[vertex]){
        this.adjList[vertex]=new Set()
      }
      else{
        console.log(`node already exists `)
      }
    }

    addEdge(v1, v2 ){
        if(!this.adjList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjList[v2]){
            this.addVertex(v2)
        }
        this.adjList[v1].add(v2)
        this.adjList[v2].add(v1)

    }
    print(){
        for(let vertex in this.adjList ){
            console.log(`${vertex}==>${[...this.adjList[vertex]]}`)
        //    for(let edge of this.adjList[vertex]){
        //     console.log(vertex,"==>", edge)
        //    }
        }
       
    }
    hasEdge(e1, e2){
       return this.adjList[e1].has(e2) &&   this.adjList[e2].has(e1)
    }
    removeEdge(e1, e2){
        if(this.hasEdge(e1,e2)){
            this.adjList[e1].delete(e2)
            this.adjList[e2].delete(e1)

        }

    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','C')
graph.addEdge('A','B');
graph.addEdge('B','C')

console.log(graph.hasEdge('B','C'))

console.log('graph')

graph.print();


graph.removeEdge('B','C')
console.log('graph after removal')
graph.print();