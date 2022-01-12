fetch("https://cozex.github.io/jsontest.json")  
.then(response => response.json())
.then(data => console.log(data.json()));