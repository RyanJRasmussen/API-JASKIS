// creating a database called jaskis
use jaskis

// creating a collection called bounties
db.createCollection("bounties")


// Insert thanaceros bounty object
db.bounties.insertOne({
  name: "Thanoceros",
  species: "Rhinoceros",
  location: "Grasslands",
  wantedFor: "Eating too much grass",
  client: "Songbird",
  reward: 10000,
  captured: false
})

// find all bounties
db.bounties.find()

// inserting the rest of the bounties
db.bounties.insertMany([
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])


// find all grassland bounties
db.bounties.find({location: 'Grasslands'})

// find all bounties over 10000
db.bounties.find({reward: {$gte: 10000 }})

//find all bounties but remove the client from the result
db.bounties.find({}, {client: 0})

// find the groundhog in the woodlands
//dont end up using $and operator???
db.bounties.find({species: "Groundhog", location: "Woodlands"})

//change polarwind bounty to 10000
db.bounties.updateOne({name: "Polarwind"}, {$set:{reward:10000}})

// remove lokinajou
db.bounties.deleteOne({name: "Lokinkajou"})

// delete songbirds bounties
db.bounties.deleteMany({client: "Songbird"})

// all bounties captured
db.bounties.updateMany({}, {$set:{captured: true}})