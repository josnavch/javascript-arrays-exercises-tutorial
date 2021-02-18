let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

//your code here

let done_task = tasks.filter(function(value){
    console.log(value.done)
    if(value.done){
        return value
    }
});

console.log(done_task)