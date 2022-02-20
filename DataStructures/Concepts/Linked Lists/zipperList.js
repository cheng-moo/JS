//Iterative Method
// time O(min(n1,n2)) space O(1)
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
a.next = b;
b.next = c;

const x = new Node('X');
const z = new Node('Z');
x.next = z;

const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 != null && current2 != null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return head1;
};
//A -------> B ------> C          //count 0 (even or odd)
//cur1
//A ------->                  //tail
//tail
//A -------> B ------> C
//          cur1
//X -------> Z
//cur2
//A -------> X                 //tail
//          tail
//X -------> Z
//           cur2               //count 1 odd
//A -------> X  ------> B                //tail
//                     tail
////A -------> B ------> C
//                       cur1       //count 2 even
//A -------> X  ------> B -------> Z               //tail
//                                tail
//X -------> Z -----> Null
//                    cur2          //count 3 odd
//A -------> X  ------> B -------> Z ------> C              //tail
//                                          tail
////A -------> B ------> C -----> Null
//                                cur1


//Recursive Method
//time O(n)
const zipperList = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2; //the remainder
  if (head2 === null) return head1; //the remainder
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperList(next1, next2);
  return head1;
};
//a ---> b ----> c    step 1
//h1     n1
//x ---> z
//h2---> n2

//a ---> x

//b ---> c           step 2
//h1     n1
//z ---> null
//h2     n2

//b ---> z

//a ---> x ---> b ---> z ....and so on
