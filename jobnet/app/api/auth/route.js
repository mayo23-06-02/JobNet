const { NextResponse } = require('next/server');
const { MongoClient } = require('mongodb');
const { default: clientPromise } = require('@/lib/mongodb');


export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("JobNet");
  const body = await req.json();

  // Check if the user already exists
  const existingUser = await db.collection("ServiceWorkers").findOne({ email: body.email });

  if (existingUser) {
    // User already exists
    return NextResponse.json({ message: "User exists" }, { status: 200 });
  } else {
    // Insert new user
    const candidateData = await db.collection("ServiceWorkers").insertOne(body);
    return NextResponse.json(candidateData);
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('JobNet');
    const userData = await db
      .collection('ServiceWorkers')
      .find()
      .sort({})
      .toArray();
    return NextResponse.json(userData);
  } catch (error) {
    console.error(error);
    return NextResponse.json('error', { status: 500 });
  }
}