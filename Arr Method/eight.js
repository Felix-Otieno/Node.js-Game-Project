let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
      return [].shift.call(this);
    },
  };
  
  const greeting = greetings.removeFirst();
  
  console.log(greeting);
  console.log(greetings);