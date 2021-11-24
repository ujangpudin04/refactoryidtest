function nearestFibonacci(total) {
  // Base Case
  if (total == 0) {
    console.log(0);
    return;
  }

  // Initialize the first & second
  // terms of the Fibonacci series
  let first = 0,
    second = 1;

  // Store the third term
  let third = first + second;

  // Iterate until the third term
  // is less than or equal to num
  while (third <= total) {
    // Update the first
    first = second;

    // Update the second
    second = third;

    // Update the third
    third = first + second;
  }

  // Store the Fibonacci number
  // having smaller difference with N
  let ans = Math.abs(third - total) >= Math.abs(second - total) ? second : third;

  // Print the result
  return ans;
}

// Driver Code
var num = [15, 6, 7];
var total = 0;
for (i = 0; i < num.length; i++) {
  total += num[i];
}
console.log(nearestFibonacci(total));
