// Immediately Invoked Function Expressions (IIFE)

// used to stop pollution from global level in the current function

(function connectDB() {
  // Named IIFE
  console.log("DB Connected");
})();

(() => console.log(`DB1 Connected`))(); // Un-named IIFE

((name) => console.log(`DB2 Connected by ${name}`))("Satyajeet"); // IIFE with parameters
