/**
Min Heap Construction

Implement a MinHeap class that supports:
	- Building a Min Heap from an input array of integers.
	- Inserting integers in the heap.
	- Removing the heap's minimum / root value.
	- Peeking at the heap's minimum / root value.

	- Sifting integers up and down the heap, which is to be used when inserting
	and removing values.

Note that the heap should be represented in the form of an array.

Example:
Input:
array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
**/

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

	// O(n) Time and O(1) Space
  buildHeap(array) {
    const firstParentIndex = Math.floor((array.length - 2) / 2);

		// loop through all lesser parent nodes and sift down to correct spots
		for (let i = firstParentIndex; i >= 0; i--) {
			this.siftDown(array, i);
		}
		return array;
  }

  siftDown(heap, i) {
    // continue sifting down until in the correct place
		while (i <= heap.length - 1) {
			// get the child node/s info
			let childIndex1 = (2 * i) + 1;
			const childIndex2 = (2 * i) + 2 <= heap.length - 1 ? (2 * i) + 2 : -1;
			const currentValue = heap[i];
			const childValue1 = heap[childIndex1];
			const childValue2 = heap[childIndex2];

			// find the lesser value which is the one to swap
			let lesserChildIndex;
			if (childIndex2 !== -1 && childValue2 < childValue1) {
				lesserChildIndex = childIndex2;
			} else {
				lesserChildIndex = childIndex1;
			}

			if (heap[lesserChildIndex] < currentValue) {
				this.swap(heap, i, lesserChildIndex);
				i = lesserChildIndex;
				childIndex1 = (2 * i) + 1;
			} else {
				return;
			}
		}
  }

  siftUp(heap, i) {
		let parentIndex = Math.floor((i - 1) / 2)

		// continue sifting up until in the correct place
		while (i > 0 && heap[i] < heap[parentIndex]) {
				this.swap(heap, i, parentIndex);
				i = parentIndex;
				parentIndex = Math.floor((i - 1) / 2);
		}
  }

	// returns the first value
  peek() {
		return this.heap[0];
  }

	// O(log(n)) Time and O(1) Space
	// removes the first index
  remove() {
    // swap the values of the last with the first
		this.swap(this.heap, 0, this.heap.length - 1);

		// pop off the new last value
		const removedValue = this.heap.pop();

		// sift down the new head to the final spot
		this.siftDown(this.heap, 0, this.heap.length - 1);

		return removedValue;
  }

	// adds to the end of the array then moves into place
  insert(value) {
    // push the new value to the end of the heap
		this.heap.push(value);

		// sift up the value to it's final spot
		this.siftUp(this.heap, this.heap.length - 1);
  }

	// swaps two values
	swap(heap, index1, index2) {
		const tempValue = heap[index1];
		heap[index1] = heap[index2];
		heap[index2] = tempValue;
	}
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
