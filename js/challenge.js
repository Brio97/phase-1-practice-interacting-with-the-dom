// Get elements
const counter = document.getElementById("counter");
const pause = document.getElementById("pause")


// Create a variable to store the count
let count = 0;

// Create a variable to store the number of likes
let likes = 0;

// Create a function to increment the counter
function incrementCounter() {
  count++;
  counter.textContent = count;
}
const timer = setInterval(incrementCounter,1000)

// Create a function to decrement the counter
function decrementCounter() {
  count--;
  counter.textContent = count;
}

// Create a function to like a number
function likeNumber() {
  likes++;
  document.getElementById("likes").textContent = likes;
}
function handlePause () {
    clearInterval(timer)
}

// Add event listeners to the buttons
document.getElementById("plus").addEventListener("click", incrementCounter);
document.getElementById("minus").addEventListener("click", decrementCounter);
document.getElementById("heart").addEventListener("click", likeNumber);
document.getElementById("pause").addEventListener("click", handlePause);