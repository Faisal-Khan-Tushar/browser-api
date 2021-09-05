const maComing=()=>{
  alert('Open the book brother your ma is coming!');
}
const confirmPicnic=()=>{
  const response=confirm('Are you going to the picnic?');
  if(response===true){
 alert('okay send me 2000 taka to my bkash please boss')
  }
  else{
    alert('Okay brother, maybe next time you will make it with us.')
  }
  console.log(response);
}

const takeName=()=>{
  const response=prompt('What is your name brother?');
  console.log(response);
  if(response){
    console.log('welcome to the journey',response);
  }
}