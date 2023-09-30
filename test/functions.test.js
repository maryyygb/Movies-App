// All the scripts for testing

const functions = require('./functions');

// example
// test('add 1 and 1 to equal 2', ()=>{
// expect(functions.add(1,1)).toBe(2)
// });


// for the api
// ASYNC/AWAIT

test('fetching data from the api', async () => {
    const resp = await fetch(url);
    expect(data).toBe('respData');
  });