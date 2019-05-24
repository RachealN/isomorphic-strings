let input_one = document.getElementById('input_one');
let input_two = document.getElementById('input_two');
let btn = document.getElementById('button');
let error = document.getElementById('error');

//EventListener
input_one.addEventListener('keyup', inputAction);
input_two.addEventListener('keyup', inputAction);
btn.addEventListener('click', checkIsormophic);

function inputAction(e){
  if (e.which==13 || e.keyCode==13){
    return false;
  }
  //assign variable to length of strings
  let inp1 = input_one.value.length;
  let inp2 = input_two.value.length;
  //disable button if input are of different length
  if (inp1 === inp2){
    btn.disabled=false;
    error.innerText = "";
  }else{
    btn.disabled = true;
    error.innerText = "Button Disabled: Enter strings of the same length to enable the button";
  }
}s

function checkIsormophic(e){
  e.preventDefault();
  let inp1 = input_one.value.length;
  let inp2 = input_two.value.length; 

  if (inp1 == 0 && inp2 == 0){
    error.innerText = "Enter string 1 and string 2 as specified";
  }else if(!(isNaN(input_one.value) && isNaN(input_two.value))){
    error.innerText = "Enter Strings not Numbers";
  }else{
    let ans = isomorphic(input_one.value, input_two.value);
    error.innerText = ans;
  }
}

//Function to Determine Isomorphic strings
function isomorphic(s, t) {
  if (s.length != t.length) {
    return ("Error");
  }
  //mappings of letters
  let sol = {}
  for (let i = 0; i < s.length; i++) {
    if (sol[s[i]] === undefined) {
      sol[s[i]] = t[i];
    } else if (sol[s[i]] !== t[i]) {
      return (`False, strings '${s}' and '${t}' are not Isormophic`);
    }
  }
  return (`True, strings '${s}' and '${t}' are Isomorphic`);
}