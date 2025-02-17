let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
      [].unshift.call(this, message);
      return this.length;
    },
  };
  
  greetings.prepend('Good day');
  
  console.log(greetings);