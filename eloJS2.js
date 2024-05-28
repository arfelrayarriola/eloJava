const totalLines = 7;

for (let i = 1; i <= totalLines; i++) {
  let spaces = " ".repeat(totalLines - i);
  let hashes = "#".repeat(i);
  console.log(spaces + hashes);
}