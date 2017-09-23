const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      const node = new Node(data);
      if (this.length > 0) {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      } else {
        this._head = node;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        return this.getNode(index).data;
      }

    insertAt(index, data) {
      const node = new Node(data);
      const nodeCurrent = this.getNode(index);
      const nodePrevious = this.getNode(index - 1);
      node.next = nodeCurrent;
      if (nodePrevious) nodePrevious.next = node;
      this.length++;
      return this;
    }

    isEmpty() {
      return !!(this._head == null)
    }

    clear() {
      this._head = new Node();
      this._tail = new Node();
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      const node = this.getNode(index);
      if (!node) return this;
      const nodePrevious = this.getNode(index - 1);
      const nodeNext = this.getNode(index + 1);
      nodePrevious.next = nodeNext;
      this.length--;
      return this;
    }

    reverse() {
      const length = --this.length;
      for (var i = 0; i < length/2; ++i) {
          const headNodeData = this.at(i);
          const tailNodeData = this.at(length - i);
          const headNode = this.getNode(i);
          const tailNode = this.getNode(length - i);
          headNode.data = tailNodeData;
          tailNode.data = headNodeData;
      }
      return this;
    }

    indexOf(data) {
      let node = this._head,
          pos = -1;
      for(let i = 0; i < this.length; i++){
         if(node.data === data){
             pos = i;
             break;
         }
         node = node.next;
      }
        return pos;
      }

    getNode(index) {
      let node = this._head;
      for(let i = 0; i < index; i++) node = node.next;
      return node;
    }
}

module.exports = LinkedList;
