let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeLast() {
      return [].pop.call(this);
    },
  };
  
  let greeting = greetings.removeLast();
  
  console.log({ greeting });
  console.log(greetings);