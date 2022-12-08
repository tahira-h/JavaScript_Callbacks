// Synchronized
function myExample(show) {
    //console.log(show);
    
    ///synchronous code that runs when button 1 gets pressed
    let list = [1, 2, 5, 3, 7, 4, 9];
    list.sort((a, b) => a - b);
    console.log(list);

}
function runAsyncFunc(show) {
    //example of asynchronous func 
    setTimeout(function afterTwoSeconds() {
        console.log('This is the func that run after 2 secs')
      }, 2000)
}


setInterval(function afterThreeSeconds() {
    console.log('3')
}, 3000)

console.log('3');

// Asynchronized


setTimeout(function afterTwoSeconds() {
    console.log('2')
  }, 2000)
  

function myFunction() {
    let dd = new Date();
    console.log(
        dd.getHours() + ":" +
        dd.getMinutes() + ":" +
        dd.getSeconds()
    );
}

// setTimestamp(myFunction, 3000);

console.log('3');