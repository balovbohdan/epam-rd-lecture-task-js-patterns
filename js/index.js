// Task 1.
// This is class that publishes events among several "subscribers".
// Use it to store subscribers and propagate payload after publishing.

class Publisher {
  #subscribers = [];

  publish(payload) {
    // ...your implementation...
  }

  addSubscriber(subscriber) {
    // ...your implementation...
  }

  removeSubscriber(subscriber) {
    // ...your implementation...
  }
}

////////////////////////////////////////////////////////////////////////////////

// Task 2.
// This is class that represents "subscribers" for the "publisher".
// Use it to react some way on events triggered by "publisher".

class Subscriber {
  trigger(payload) {
    // ...your implementation...
  }
}

////////////////////////////////////////////////////////////////////////////////

// Task 3.
// Paste here some "pub/sub" logic: create "publisher" and add to it
// several "subscribers". Publish several events. Your "subscribers"
// have to react on events some way (e.g., modal window, "alert",
// "console.log", etc.). Just write "run()" in your browser's console
// to test how your code works.

function run() {
  // ...your implementation...
}
