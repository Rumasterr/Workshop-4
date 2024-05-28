async function callMessage() {
    try {
        const response = await fetch('http://localhost:8000/hello_ud');
        const data = await response.text();
        document.getElementById('result').textContent = data;
    } catch (error) {
        console.error('Error:', error);
    }
}
 //here the route in callwebservice is changed to products because it is defined in FastAPIs
 //also there was an error when getting into Json properties, so it was changed
 //I specified the route for both functions
async function callWebService() {
    try {
        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();
        
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th><th>Description</th></tr>';
        
        data.forEach(item => {
            table += <tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td></tr>;
        });
        
        table += '</table>';
        
        document.getElementById('result').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
    }
}
