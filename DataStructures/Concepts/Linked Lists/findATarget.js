//Iterative Method
//time O(n) space O(1)
find = (head, target) => {
  current = head;
  while (current != null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};
//Recursive Method
//time O(n) space O(n)
find = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return find(head.next, target);
};
