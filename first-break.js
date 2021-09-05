// console.log('hello there')
// const myself={
//   name:'Faisal Khan Tushar',
//   university:'Diu',
//   age:21,
//   goingToWatchAMovie:(movieName)=>{
//     console.log(movieName);
//   }
// }
// myself.goingToWatchAMovie('shang chi');

// document.getElementById('name')

// fetch(url)

//second innigns
const maComing=()=>{
  alert('your ma is coming open the book')
}
const picnic=()=>{
  const response=confirm('are you willing to go with us?');
  console.log(response);
  if(response){
    alert('welcome the mongolz clan');
  }
  else{
    alert('you better come with us the next time');
  }
}

const userName=()=>{
 const response=prompt('what is your name bhaijan?');
 console.log(response);
 if(response){
   alert('welcome');
 }
}

const reload=()=>{
  location.reload();
}
const visit=()=>{
  location.assign('https://reactjs.org/docs/react-dom.html#hydrae');
}