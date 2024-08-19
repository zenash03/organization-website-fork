// File khusus functions yang reusable misal number format atau check datanya empty atau tidak
const functions = {
  isEmptyObject(object) {
    for(let data of object) return false;
    return true;
  },
  oke() {
    
  }
}

export default {
  ...functions
}