class GUID {
    generate() {
        const hex = "0123456789ABCDEF";
        const model = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx";
        var str = "";
        for (var i = 0; i < model.length; i++) {
            var rnd = Math.floor(Math.random() * hex.length);
            str += model[i] == "x" ? hex[rnd] : model[i];
        }
        return str.toLowerCase();
    }
}

module.exports = {
    posts: [
        {
            id: new GUID().generate(),
            author: 'TheWriter',
            datePublished: '2021-10-06T23:47:56.665Z',
            title: 'Deep Post',
            content: 'This is a deep post about meaningful stuff',
            imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300`
        },
        {
            id: new GUID().generate(),
            author: 'TheWriter',
            datePublished: '2021-11-06T00:00:00.000Z',
            title: 'My Dilema',
            content: 'I guess the internet is a good place to open up about my life',
            imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300`
        },
        {
            id: new GUID().generate(),
            author: 'Anonymous',
            datePublished: '2021-11-01T00:00:00.000Z',
            title: 'Kittens and Rainbows',
            content: 'Need I say more?',
            imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300`
        }
    ]
}


