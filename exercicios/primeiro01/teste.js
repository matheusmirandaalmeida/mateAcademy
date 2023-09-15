
const password = 'Matheus'
const temSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
function testPassword(password){
  if(password.length < 8) {
    return false
  }
  if(!/[A-Z]/.test(password)){
    return false;
  }
  if(!/[a-z]/.test(password)) {
    return false;
  }
  if(!/[0-9]/.test(password)){
    return false;
  }
  if(!temSimbolo.test(password)) {
    return false;
  }
  if(password.length > 8){
    return true;
  }
  return true;
}
console.log(testPassword('Matheus'));