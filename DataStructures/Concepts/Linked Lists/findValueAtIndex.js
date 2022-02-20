//Iterative Method
// time O(n) space O(1)
atIndex = (head, index) => {
  let count = 0;
  let current = head;
  while (current != null) {
    if (count === index) return current.val;
    count++;
    current = current.next;
  }
  return null;
}; 

//Recursive Method
//time O(n) space O(n)
atIndex = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return atIndex(head.next, index - 1);
};
