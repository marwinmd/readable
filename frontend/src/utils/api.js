const headers = {
    'Accept': 'application/json',
    'Authorization': 'super secure'
}

export function fetchAllCategories() {
    return fetch('http://localhost:3001/categories', {headers})
        .then((res) => res.json())
        .then(data => data.categories)
}

export function fetchAllPosts() {
    return fetch('http://localhost:3001/posts', {headers})
        .then((res) => res.json())
        .then(data => data)
}

