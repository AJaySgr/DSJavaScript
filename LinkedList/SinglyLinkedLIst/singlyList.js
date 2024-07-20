// there will be a Node. Node will have to two part VALUE & NEXT

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  traversal() {
    let current = this.head
    console.log("List items are follow : ")
    while (current.next) {
      console.log(current.val)
      current = current.next
    }
  }
}

let List = new SinglyLinkedList()
List.push("!@!#")
List.push("123")
List.traversal()
//console.log(List.pop())

