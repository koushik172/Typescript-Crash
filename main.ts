const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;

const addbtn = document.getElementById("add") as HTMLButtonElement;

const numRes: number[] = [];

function Add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(obj: { val: number; timestamp: Date }) {
	console.log(obj.val, obj.timestamp);
}

addbtn.addEventListener("click", () => {
	const num1 = num1Element.value;
	const num2 = num2Element.value;
	const result = Add(+num1, +num2);
	numRes.push(result as number);
	console.log(result);
	printResult({ val: result as number, timestamp: new Date() });
});
