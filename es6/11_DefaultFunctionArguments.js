function makeAjaxRequest(url, method = 'Get') {
    console.log(`Invoking URL is ${url} with ${method} method`);
}

makeAjaxRequest('http://localhost/get')
makeAjaxRequest('http://localhost/post', 'Post')
makeAjaxRequest('http://localhost/delete', 'Delete')