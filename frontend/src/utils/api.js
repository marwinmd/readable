const headers = {
    'Accept': 'application/json',
    'Authorization': 'super secure'
}

const url = 'http://localhost:3001'

export function fetchAllCategories() {
    return fetch(`${url}/categories`, {headers})
        .then((res) => res.json())
        .then(data => data.categories)
}

export function fetchAllPosts() {
    return fetch(`${url}/posts`, {headers})
        .then((res) => res.json())
        .then(data => data)
}

export function fetchPostsForCategory(category) {
    debugger
    var url1 = `${url}/${category}/posts`
    return fetch(url1, {headers})
        .then((res) => res.json())
        .then(data => data)
}

