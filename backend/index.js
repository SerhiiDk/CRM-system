require('dotenv').config();


const express = require('express')
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb');

const router = express.Router();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/clients', router);


const clientPromise = MongoClient.connect(process.env.DB_URL || 'mongodb+srv://Serhii:Sde2022@cluster0.lktdc.mongodb.net/Clients_db?retryWrites=true&w=majority',
{
    useUnifiedTopology:true,
    maxPoolSize:10
});

router.use(async(req, res, next) => {
    try {
        const client = await clientPromise;
        req.db =client.db('Clients_db');
        next();

    } catch (error) {
        next(error);
    }
})

const port = process.env.PORT || 3000;


router.get('/', async (req, res)=>{
    try {
        const db = req.db;
        const clients = await db.collection('clients').find().toArray();

        if (req.query.search) {
            const search = req.query.search.trim().toLowerCase();

            const clientList = clients.filter(client => [
                client.name,
                ...client.contacts.map(({value})=> value)
            ].some(str => str.toLowerCase().includes(search)));

            res.send(clientList);
            return;
        }


        res.send(clients);
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async (req, res)=>{
    const data = req.body; 
    const db = req.db;

    data.createdAt = new Date().toISOString()
    data.updatedAt = new Date().toISOString() 

    // await db.collection('clients').insertOne(data);
    const { insertedId } = await db.collection('clients').insertOne(data);
    const client  =  await db.collection('clients').findOne({ _id: ObjectId(insertedId)})
    res.send(client);
});

router.patch('/:id', async (req, res) => {
    try {
        const { name, lastName, surname, contacts } = req.body;
        const db = req.db;

        await db.collection("clients").updateOne(
            { _id: ObjectId(req.params.id) },
            {
            $set: {
                surname,
                name,
                lastName,
                contacts,
                updatedAt: new Date().toISOString()
            },
            }
        );

        const client = await db.collection('clients').findOne({ _id: ObjectId(req.params.id) });
        res.send(client);
    } catch (error) {
        console.log(error);
    }
});


router.delete('/:id', async (req, res)=> {
    const db = req.db;
    const deleteClient  =  await db.collection('clients').deleteOne({ _id: ObjectId(req.params.id)})
    res.send(deleteClient);
});




app.listen(port, () => {
    console.log(`Listening on http://local:${port}`)
})
