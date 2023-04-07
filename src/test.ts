const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.querySelector("num1")! as HTMLInputElement;
const input2 = document.querySelector("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log("====================================");
  console.log(add(+input1.value, +input2.value));
  console.log("====================================");
});

// let age: number = 50;
// let nameUser: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback = (a: number) => {
//   return 100 + a;
// };

// let anything: any = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = "Text";
// let str: string;
// if (typeof some === "string") {
//   str = some;
// }

// let person: [string, number];
// person = ["Max", 21];


// enum Status { LOADING, READY };
// const video = {
//   status: Status.LOADING,
// }
// if (video.status === Status.LOADING) {
//   console.log('Status', Status.LOADING);
// }
// if (video.status === Status.READY) {
//   console.log('Status', Status.READY);
// }


// let many: string | number;
// many = 'Fruit';
// many = 10;

// let work: 'enable' | 'disable';
// work = 'enable';

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }

// type DataBasePage = {
//   title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open' | 'close',
//   details?: {
//     createAt: Date,
//     updateAt: Date,
//   }
// }
