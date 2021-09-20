const MongoClient = require('mongodb').MongoClient; //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/"; //mongodb adresimiz
//sort methodu kullanılacak. Ne ile sortlamak istiyorsan ona 1 verebilirsin.
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb"); //önceden kurulmuş olan db açıldı.
    //name:1 verildi => name ile sortlanmak isteniyor.
    //name:1 => ascending, name:-1 => descending olur.
    const mysort = { name: 1 };
    dbo.collection("customers").find().sort(mysort).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//result:

// [
//     { _id: 58fdbf5c0ef8a50b4cdd9a86, name: 'Amy', address: 'Apple st 652'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8e, name: 'Ben', address: 'Park Lane 38'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8a, name: 'Betty', address: 'Green Grass 1'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a90, name: 'Chuck', address: 'Main Road 989'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a87, name: 'Hannah', address: 'Mountain 21'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a84, name: 'John', address: 'Highway 71'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a88, name: 'Michael', address: 'Valley 345'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a85, name: 'Peter', address: 'Lowstreet 4'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8b, name: 'Richard', address: 'Sky st 331'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a89, name: 'Sandy', address: 'Ocean blvd 2'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8c, name: 'Susan', address: 'One way 98'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8d, name: 'Vicky', address: 'Yellow Garden 2'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a91, name: 'Viola', address: 'Sideway 1633'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8f, name: 'William', address: 'Central st 954'}
//   ]