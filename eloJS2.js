const totalLines = 7;

for (let i = 1; i <= totalLines; i++) {
  let spaces = " ".repeat(totalLines - i);
  let hashes = "#".repeat(i);
  console.log(spaces + hashes);
}

const makeNoise = function() {
    console.log("Pling!!");
};

makeNoise();

function square (x) { 
    return x * x;
}



function smallestNumber(num1, num2) {
    return Math.min (num1, num2);
  }
  
  let result = smallestNumber(50, 60);
  console.log("The smallest number is " + result)

