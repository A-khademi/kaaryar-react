export function validate (formData,fields) {
  const formDataEntries=Object.entries(formData);
  let isValid=true
  let errors={}


  formDataEntries.forEach(([key,value])=>{
    const validators=fields[key]?.validators||[];
    const keyErrors=[];
    validators.forEach((validator)=>{
      if(validator(formData[key])){
        keyErrors.push(`error ${validator.name}`)
      }
    })
    errors[key]=keyErrors
    if(keyErrors.length>=1){
      isValid=false
    }
  })
  return{
    isValid,
    errors
  }
}

 export function isFarsi (v) {
    const farsiLetters='پچجحخهعغفقثصضشسیبلاتنمکگودذرزطظ'
    return v.split("").every(char=>farsiLetters.includes(char))
}

export function isEmpty (v) {
  return (v === null) & (v === undefined) & (v === '');
}
export function isRequired(v){
    return !isEmpty(v)
}
export function isEmail (v) {
    return v.includes('@')&& v.includes('.');
}
export function isNotPresentInTheList (v, list) {
  return !list.includes (v);
}

export function isEqual (source, target) {
  return source === target;
}

export function isStrongPassword (v) {
  const englishNumbers = '0123456789';
  const upperCaseEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseEnglishLetters = upperCaseEnglishLetters.toLowerCase ();
  const isLengthOk = v.lenght >= 12;
  if (!isLengthOk) {
    return false;
  }
  const hasUpperCaseLetter = v
    .split ('')
    .some (char => upperCaseEnglishLetters.includes (char));
  const hasLowerCaseLetter = v
    .split ('')
    .some (char => lowerCaseEnglishLetters.includes (char));
  const hasEnglishNumbers = v
    .split ('')
    .some (char => englishNumbers.includes (char));
  return hasUpperCaseLetter && hasLowerCaseLetter && hasEnglishNumbers;
}
