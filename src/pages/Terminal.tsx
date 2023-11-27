import { useState } from "react";

class Node {
  constructor(
      public name: string, 
      public children: Node[],
      public parrent: Node | null
    ) {}
}

class Tree {
  private root: Node;
  private currNode: Node;
  constructor(
    root: Node = new Node('/', [], null),
    currNode: Node = root
  ) { 
    this.root = root
    this.currNode = currNode
  }

  makedir(dirName: string): void {
    this.currNode.children.push(new Node(dirName, [], this.currNode))
  }

  private findIndex(dirName: string): number {
    const index = this.currNode.children.findIndex((dir) => dir.name === dirName)

    return index
  }

  rmdir(dirName: string): boolean {
    const index = this.findIndex(dirName)

    if (index !== -1) {
      this.currNode.children.splice(index, 1)
      return true 
    } 

    return false
  }

  cd(dirName: string): boolean {
    switch(dirName) {
      case '..' : {
        if (this.currNode === this.root) return false

        this.currNode = this.currNode.parrent!
        return true
      }
      
        case '.' :
          return true 
        
        default : {
          const index = this.findIndex(dirName)

          if (index === -1) return false

          this.currNode = this.currNode.children[index]
          return true
        }
    }
  }
}

export default function Terminal() {
  const [ filesystem, setFilesystem ] = useState(new Tree())
  return (
    <section>

    </section>
  )
}