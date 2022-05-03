


export const ValidationEmailPhone=(email: string ) =>{
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validEmailRegex)) {
      return true;
  
    } else {
      return false;
  
    }
}