// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

function multiplyStrings(num1, num2) {
  let numHash = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5
    // continue to 9
  }
  let digits = []
  let remainder = '0'

  for(i=num1.length; i > 0 ; i--){
    for(j=num2.length; j > 0; j--){
      let first = numHash[num1[i]]
      let second = numHash[num2[j]]
      let addThis = numHash[remainder]

      let multiply = first * second
      let total = multiply + addThis
      
      let makeTotalString = total.toString()
  
      if(makeTotalString.length == 2){
        remainder = makeTotalString[0]
        digits.push(makeTotalString[1])
      } else{
        remainder = '0'
        digits.push(makeTotalString)
      }
    }
  }

  return digits.reverse().join("")

}

multiplyStrings("525", "3")