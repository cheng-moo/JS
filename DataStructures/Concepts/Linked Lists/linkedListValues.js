//Using Iteration method to get values

const linkedListValues = (head) => {
  let current = head;
  const values = [];
  while (current != null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

//Using Recursive method to get values

const linkedListValues = (head) => {
  const values = [];
  fillVal(head, values)
  return values
}
const fillVal = (head, values) => {
  if (head == null) return; //base case
  values.push(head.val); //refer to the values = [] Up there !!
  fillVal(head.next, values) //recursive case
  return;
}
