import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env')
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('bitlinks')

    const data = await db.collection('url').find({}).toArray()
    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  const body = await request.json() 
  const client = await clientPromise;
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  // Check if the short url exists
  const doc = await collection.findOne({shorturl: body.shorturl})
  if(doc){
    return Response.json({success: false, error: true,  message: 'URL already exists!' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
    createdAt: body.createdAt || new Date(),
  })

  return Response.json({success: true, error: false,  message: 'URL Generated Successfully' })
}
