const addItem=()=>{
  const inputField =document.getElementById('item-name');
  const input=inputField.value ;
  
  console.log(input);
//adding itmes in the ui

addItemsInUi(input);
//adding items in our local storage

  inputField.value=''
}


const addItemsInUi=(input)=>{
const ul=document.getElementById('items');
const li=document.createElement('li');
li.innerText=input;
ul.appendChild(li);
}
const getCart=(input)=>{
 const cart= localStorage.getItem('cart');
  let cartObj;
  if(cart){
    cartObj=JSON.stringify(cart);
  }
  else{
    cartObj={};
  }
  return cartObj;
}
const addProductToCart=input=>{
  const cart=getCart();
  cart[input]=1;
  console.log(cart);
  const cartStringified=JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified);
}