// let header = document.querySelector("h1");
// header.innerHTML = "Hello World";

// let sub = document.querySelectorAll("li");
// iterate with a loop inside a function
// sub.innerHTML = "bye";

// const apiMe = "https://api.github.com/users/tophu";

async function myApi() {
  const res = await fetch(apiMe)
  const data = await res.json();
  // can call object key like this
  // console.log(data.name);
  // console.log(data.followers);
  // console.log(data.public_repos);
  // OR JS Destructuring, Destructure the object keys into variables
  const { name } = data;
  // console.log(`Name: ${name}, Followers: ${followers}, Repos:${public_repos}`);
  // DOM Manipulation
  document.getElementById('api').textContent = name;
}
myApi();