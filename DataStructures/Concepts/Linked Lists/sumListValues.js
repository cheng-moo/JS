//Iterative Method for Summing
//O(n)time O(1)space
const sumList = (head) => {
  let sum = 0;
  if (head === null) return 0;
  let current = head;
  while(current != null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

//Recursive Method for Summing
//O(n)time O(n)space
const sumList = (head) => {
  if (head == null) return 0; //base case
  return head.val + sumList(head.next); //recursive case
}
