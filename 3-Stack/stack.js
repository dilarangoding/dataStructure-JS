// Stack
/**
 * Stack
 * Last in First Out (LIFO)
 * Setiap ada data baru maka akan berada di atas tumpukan dan hanya bisa di lihat dari yang terakhir
 */

function createStack() {
  let arr = []; //[1, 2 , 3 ]
  return {
    push: function (item) {
      arr.push(item);
    },
    pop: function () {
      arr.pop();
    },
    peek: function () {
      return arr[arr.length - 1];
    },
    size: function () {
      return arr.length;
    }
  }
}

const bookStack = createStack();
bookStack.push("Harry Potter");
bookStack.push("Madilog");
bookStack.push("The Strangers");

bookStack.pop();
bookStack.pop();
bookStack.pop();

console.log(bookStack.peek());
console.log(bookStack.size());

