const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//I'll be so 100% honest, I don't know what readline is, or is necessary for. I tried running this in the VSC terminal, didn't work. Tried CMD line, gave me that readline was necessary.

let decision = 1;
const ints = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function asking() {
    //Something, like everything with java related things, wasn't letting it run, and I couldn't figure out what it was, so i just changed little things again and again until it worked.
    //Java is my bane, and JavaScript was much better, worked smoother and I understood more, but JavaScript is also, still not great. For me, at least.
    rl.question("What action would you like to perform?\nPrint the array(1)\nSum the array(2)\nFind Min and Max(3)\nReverse the array(4)\nQuit (0)?", (input) => {
        decision = parseInt(input);
        //while (decision != 0) {
        if (decision === 1)
        {
            //Little bit of research gave me how foreach works in js, simply used it for all the if statements.
            ints.forEach(function(number) {
                console.log(number);
            });
        }
        else if (decision === 2)
        {
            let sum = 0;
            ints.forEach(function(number){
                sum += number;
            });
            console.log("The sum is " + sum);
        }
        else if (decision === 3)
        {
            let min = Math.min(...ints);
            let max = Math.max(...ints);
            console.log(min + " is the minimum, " + max + " is the maximum.");
        }
        else if (decision === 4)
        {
            ints.reverse();
            ints.forEach(function(number){
                console.log(number)
            })
        }
        else if (decision === 0)
        {
            rl.close();
            return;
        }
        //Most of the main logic and code is the same, just edited to work in js. The rl parts and calling of other functions gets on my nerves, as I don't know why it can;'t work without them, but it's here now.
        asking();
    });
}
asking();
//It works. And I genuinely tried on this one, instead of caving and looking up every answer or just copying others work. I'd say, when it comes to anything Java-related, that's a success.