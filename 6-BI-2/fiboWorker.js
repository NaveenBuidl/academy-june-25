function calculateFibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
  }
}

// invoke this process.on and event name
process.on("message", ({ number }) => {
  const result = calculateFibonacci(number);
  console.log("HERE", result);
  process.send(result);
});