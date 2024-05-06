/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let error = false;
  let openingArray = ["(","{","["];
  let closingArray = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {

          closingArray.push(")");

          if (s[i+1] === closingArray.pop()) {
              console.log("() completed")
              i++;
          }

          else if (openingArray.includes(s[i+1])) {
              console.log(`new bracket ${s[i+1]} opened`);
          }   
      }

      else if (s[i] === "[") {

          closingArray.push("]");
          
          if (s[i+1] === closingArray.pop()) {
              console.log("[] completed")
              i++;
          }

          else if (openingArray.includes(s[i+1])) {
              console.log(`new bracket ${s[i+1]} opened`);
          }
      }

      else if (s[i] === "{") {

          closingArray.push("}");

          if (s[i+1] === closingArray.pop()) {
              console.log("{} completed")
              i++;
          }

          else if (openingArray.includes(s[i+1])) {
              console.log(`new bracket ${s[i+1]} opened`);
          }
      }

      else {
          error = true;
          break;
      }
  }

  if (error) {
      return false;
  }
  else if (closingArray.length === 0) {
      return true;
  }
};