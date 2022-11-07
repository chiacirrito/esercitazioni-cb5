
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => data.map((key) => console.log(key.name, key.address, key.address.city)))
.catch((e) => console.log("Errore"))
.finally((f) => console.log("---Fine primo array---"))


fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => data.map((object) => console.log(object.id, object.title)))
.catch((e) => console.log("Hai sbagliato!"))
.finally((f) => console.log("---Fine secondo array---"))