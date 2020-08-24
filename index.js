function FindWord(){
  var str= "bomb";
  if(str =="bomb")
    return "duck!!";
   else {     
      return "there is no bomb,relax";
    }
}
 

 function getVowels(str) {
	var str = str.split(/[aeiou]/i).length-1;
		return str;

  }
  // console.log(getVowels("andisiwe"));


function whichIsLarger(f,g){
  var f =4;
  var g =2;
  if( f()> g())
  return "f"
  if(f()<g())  
  return "g"
  else {    
    return 'neither';
  }
}
 

function count(l,h,b){
  var volume = l*h*b;
  return volume;
}
// console.log(count(1,2,3))

const numbers =[-5,4,2,-6,3];
const filtered = numbers.filter(function(value){
  return value >=0;
});

// console.log(filtered)

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
  <script>style </script>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>


