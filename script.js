 const byteSize = (str) => {
  return new Blob([str]).size;
};

// Test cases
console.log(byteSize('hello world'));    // 11
console.log(byteSize('안녕하세요'));        // 15
console.log(byteSize(''));               // 0
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

