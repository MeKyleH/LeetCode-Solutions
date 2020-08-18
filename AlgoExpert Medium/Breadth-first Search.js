/**
Breadth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form
an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree
using the Breadth-first Search approach (specifically navigating the tree from
left to right), stores all of the nodes' names in the input array, and returns
it.
**/

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

	// O(v + e) Time - loops through each node and edge
	// O(v) Space - when a root node has all leaves under it
  breadthFirstSearch(array) {
		// create a queue with the root node
		const queue = [this];

		// continue while queue has values
		while(queue.length > 0) {
			const current = queue.shift();
			// add this node to the output
			array.push(current.name);
			// add the children to the queue
			for (const child of current.children) {
				queue.push(child);
			}
		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
