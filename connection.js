import {MongoClient} from 'mongodb'

async function main() {
    const uri = 'mongodb+srv://dia:beasting1@cluster0.nzpgh.mongodb.net/test?retryWrites=true&w=majority"'


const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

// list databases in our cluster

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}