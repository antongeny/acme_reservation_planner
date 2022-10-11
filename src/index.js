// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)
// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.
// Create HTML with a template literal by mapping over the users and restaurants.
app.use(express.static(path.join(__dirname, "src")));

// const getUsers = async () => {
//   const response = await fetch("http://localhost:3000/api/users");
//   console.log(response)

//   const json = await response.json();
//   return json.users;

// }
const userFetch = await fetch("http://localhost:3000/api/users");
const userListElement = document.getElementsById("users-list");

//for (let puppy of puppies) {
//   const element = document.createElement("li");
//   element.innerText = "Name: " + puppy.name;
//   puppyListElement.appendChild(element);
// }
//const renderUsers = users ;

userListElement.appendChild(userFetch.forEach(element => ));

app.get("/users", async (req, res) => {
	await fetch("http://localhost:3000/api/users")
		.then((response) => response.json())
		.then((data) => res.send(data));
});

app.get("/restaurants", async (req, res) => {
	await fetch("http://localhost:3000/api/restaurants")
		.then((response) => response.json())
		.then((data) => res.send(data));
});
