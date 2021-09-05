const cookieFinder=()=>{
  const grabACookie =document.cookie;
  //we got the cookie here.
  //now we will convert all the cookies into an array.
  const cookieArray=grabACookie.split('; ');
  //because all of the cookies that we have seen were seperated by a semicolon & a white space
  const grabASingleCookie=cookieArray.find(cookie=>cookie.includes('='));
  //here we are grabbing a single peice of cookie.Because previously we have created an array of cookies, and they were seperated by the = sign so we are trying to find the first of this kind.
  const getTheNameOfTheCookie =grabASingleCookie[0]
  //here we will get the name of the cookie.
  //document.cookie.split('; ').find(cookie=>cookie.includes('=')).split('=')[0]

}