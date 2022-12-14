// 1. Find the longest word in 'I love to rock and Codemify'

function findLongestWord(line) {
  const lineSplit = line.split(" ");
  const longestWord = lineSplit.reduce((result, word) =>
    result.length >= word.length ? result : word
  );
  console.log(longestWord);
}
console.log("Task 1 - This is the longest word in a given string ===>");
findLongestWord("I love to rock and Codemify");

// =========================================================
const users = [
  {
    firstName: "Sergii",
    lastName: "Khromchenko",
    email: "sergii@gmail.com",
    age: 31,
  },
  {
    firstName: "Alex",
    lastName: "Plishka",
    email: "alex@yahoo.com",
    age: 42,
  },
  {
    firstName: "Sergii",
    lastName: "Kewl",
    email: "sergii@verizon.com",
    age: 17,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    email: "mike@gmail.com",
    age: 55,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 18,
  },
  {
    firstName: "Bekka",
    lastName: "GIlbert",
    email: "",
    age: 18,
  },
];

// 2. Find users with duplicated email in the users object and put them in array
function duplicateEmailUsers(array) {
  const arrayEmail = array
    .map((element) => element.email)
    .filter((element, i, emailsName) => emailsName.indexOf(element) !== i);
  const duplicates = array.filter((obj) => arrayEmail.includes(obj.email));
  console.log(duplicates);
}
console.log("Task 2 - These are users with duplicated emails (if any) ===>");
duplicateEmailUsers(users);

// 3. Find the youngest user in users object
function youngestUser(array) {
  console.log(
    array.reduce((user, nextUser) =>
      user.age < nextUser.age ? user : nextUser
    )
  );
}
console.log("Task 3 - This is the youngest user in given object ===>");
youngestUser(users);

// 4. Find user with missing email
function missingEmailUsers(array) {
  const arrayWithMissingEmails = array.filter(
    (element) => element.email === ""
  );
  console.log(...arrayWithMissingEmails);
}
console.log("Task 4 - These are the user(s) with missing email ===>");
missingEmailUsers(users);

// 5. Return an object of users with gmail emails only
function gmailUsers(array) {
  console.log(array.filter((element) => element.email.includes("@gmail.com")));
}
console.log("Task 5 - These are the user(s) with gmail email only ===>");
gmailUsers(users);
