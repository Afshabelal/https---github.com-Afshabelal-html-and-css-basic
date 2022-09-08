const a = {
    firstName: 'Afsha',
    lastName: 'Belal',
    age:22,
    address: { city: 'Jsr', state: 'Jharkhand', country: 'India' },
  };
  
  function myFunc({ age, address }) {
    console.log(age, address);
  }
  
  myFunc(a);