function message(greeting, callback) {
    console.log(greeting);
    callback();
}

function afterward() {
    console.log('Good Bye');
}

message('Hello there!!!!', afterward);