/**
Depth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form
an acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree
using the Depth-first Search approach (specifically navigating the tree from
left to right), stores all of the nodes' names in the input array, and returns
it.
**/


// Do not edit the class below except
// for the depthFirstSearch method.
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

	// 0(V+E) Time and O(V) Space where V is the vertices (node) and E is the edges (connector lines)
  depthFirstSearch(array) {
		// add the currentNode's name to the output
		array.push(this.name);

		// loop through the array
		for (const child of this.children) {
			// call the depthFirst each children node
			child.depthFirstSearch(array);
		}
		return array
  }
}

// Do not edit the line below.
exports.Node = Node;
