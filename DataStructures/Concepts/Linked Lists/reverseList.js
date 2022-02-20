//Iterative Method
//time O(n) space O(1)
reverse = (head) => {
  let current = head;
  let prev = null;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
// N     A ----> B ----> C
// pre  cur     next
// N <----A -xx-> B ----> C
// pre   cur    next // We make (next) so we can continue moving in the list (so we don't lose access to it)
// N <----A       B ----> C
//       pre     cur     next
// N <----A <---- B -xx-> C
//       pre     cur     next
// N <----A <---- B       C----> N
//               pre     cur   next
// N <----A <---- B <---- C-xx-> N
//               pre     cur   next
// N <----A <---- B <---- C      N
//                       pre     cur    next // So prev is the head right now

//Recursive Method
//time O(n) space O(n)
reverse = (head, prev = null) => {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  return reverse(next, head);
};
