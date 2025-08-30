const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url == '/news') {
        const newObj = {
            name: 'Honda',
            price: 3000000,
            color: 'gray'

        }
        res.end(JSON.stringify(newObj))
    }
    if(req.url == '/about'){
        const about = {
            name: "Mohammad Imran",
            roll: 17,
            class: 14
        }
        res.end(JSON.stringify(about))
    }
    if(req.url = '/contact'){
        const contact = {
            name: "Mohammad Imran",
            address: "Dhaka,Jatrabari",
            phone: "01519606323"
        }
        res.end(JSON.stringify(contact))
    }
});

server.listen("3001")