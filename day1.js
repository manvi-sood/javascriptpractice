var ch1 = require("chalk");

console.log(ch1.blue("Example 1:") + ch1.yellow("OR case with numbers 1 | 0"));
if (1 || 0) {
  console.log(ch1.green("truthy"));
} else {
  console.log(ch1.red("falsy"));
}
