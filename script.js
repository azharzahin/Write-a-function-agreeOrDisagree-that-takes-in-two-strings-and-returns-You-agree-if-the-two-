question : 
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.



answer : 
const agreeOrDisagree = (string1 , string2) =>{

if (string1 === string2){
  return 'You agree!';
}
else {
  return 'You disagree!';
}

}
