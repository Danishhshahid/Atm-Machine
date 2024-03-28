import inquirer from "inquirer";
let balance = 1000;
const pincode = 9988;
console.log(`\n Wellcome To Danish bank ATM\n`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number",
    },
]);
if (pinAnswer.pin === pincode) {
    console.log("Correct pin");
    let operations = await inquirer.prompt([
        {
            name: "operators",
            message: "Select option",
            type: "list",
            choices: ["withdraw", "check Balance"],
        },
    ]);
    if (operations.operators === "withdraw") {
        let userAmount = await inquirer.prompt([
            {
                name: "useramount",
                message: "Enter Your Amount",
                type: "list",
                choices: ["Fast Cash", "Enter Your Amount"],
            },
        ]);
        if (userAmount.useramount === "Enter Your Amount") {
            let amount = await inquirer.prompt([
                {
                    name: "enteramount",
                    message: "Enter Your Amount",
                    type: "number",
                },
            ]);
            if (amount.enteramount > balance) {
                console.log(`Insufficiant balance`);
            }
            else if ((balance -= amount.enteramount)) {
                console.log(`Your Remaining balance is ${balance}`);
            }
        }
        if (userAmount.useramount === "Fast Cash") {
            let fastcash = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select Option:",
                    type: "list",
                    choices: [100, 300, 500, 1000, 2000],
                },
            ]);
            if (fastcash.amount > balance) {
                console.log(`Insufficiant balance`);
            }
            else if ((balance -= fastcash.amount)) {
                console.log(`Your Remaining balance is: ${balance}`);
            }
        }
    }
    else if (operations.operators === "check Balance") {
        console.log(`Your Current Balance is ${balance}`);
    }
}
else {
    console.log("Invalid Pin");
}
let message = "\nThank You for using ATM machine";
console.log(message.toUpperCase());
