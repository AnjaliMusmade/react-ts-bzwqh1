import React from 'react';

function SayHelloAlert(){
  alert("Hello this is on click evet!!");
}



function HelloWorld(){
  return(
<div>
<div>
Hello World..!!!!!!!!!!!!</div>
<button onClick={SayHelloAlert}>Click Me</button>
</div>
  );
}


export default HelloWorld;