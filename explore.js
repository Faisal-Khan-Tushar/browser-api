console.log('hello world')
console.log('biday pitibi')
// document.getElementById('name'); //wiil throw an error
// fetch(url) //will throw an error
const student={
  name:'Faisal Khan Tushar',
  age:21,
  university:'Daffodil International University',
 doSomething:function(name){
   console.log('yes you are doing something',name);
 }
}
student.doSomething('Faisal Khan Tushar');
/* Here what I am doing is, I am calling a function or method from an object */
document.getElementById('student');
/* Here we are doing kind of the same thing. Same concepts is actually used here. We are calling a fuction or method which is present in the document object & the function is called 'getElementbyId' and we are passing a parameter to it, just like we did previously in our customly created object.So, these two things act's exactly in the same manner. */