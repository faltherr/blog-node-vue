# What's in this Repo

> A noDB simple blog with a Vue.js frontend and a json-server backend

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Server Setup

``` bash
# to run the server use json-server [Optional port]
# npm i json-server if you do not have it installed globally
json-server --watch db.json [--port 3004]

# here is the db schema in case you delete all of the posts
    {
        "posts": [
            {
            "id": 1,
            "author": "TheWriter",
            "datePublished": "2021-10-06T23:47:56.665Z",
            "title": "Deep Post",
            "content": "This is a deep post about meaningful stuff",
            "imageUrl": "https://picsum.photos/id/2/200/300"
            },
            {
            "id": 2,
            "author": "TheWriter",
            "datePublished": "2021-11-06T00:00:00.000Z",
            "title": "My Dilema",
            "content": "I guess the internet is a good place to open up about my life",
            "imageUrl": "https://picsum.photos/id/3/200/300"
            },
            {
            "id": 3,
            "author": "Anonymous",
            "datePublished": "2021-11-01T00:00:00.000Z",
            "title": "Kittens and Rainbows",
            "content": "Need I say more?",
            "imageUrl": "https://picsum.photos/id/1/200/300"
            }
        ]
    }

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
