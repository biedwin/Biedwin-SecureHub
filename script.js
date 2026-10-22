// javascript
fetch("http:jsonplaceholder.typicode.com/user/1")
.then(function (response) {
    if (!response.ok) {
        throw new Error("something went wrong");
    }
    return response.json();
})
.then(function (user) {
    console.log(user);
    console.log(user.name);
    console.log(user.email);
})
.catch(function (error) {
    console.error("API error:", error.message);
});