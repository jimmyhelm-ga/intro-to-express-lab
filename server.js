// Import Express
const express = require('express')

// Create an Express app
const app = express()



// Define routes here (we'll add them soon)



app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    const greeting = `Hello there, ${username}!`;
    res.send(greeting);
  });

  app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    

    function isNumber(value) {
        return typeof value === 'number';
      }
      if (!isNumber(number)){
        res.send('You must specify a number.')
      }
      else (res.send(number))
  });

  app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    
    const message2 = 'This item is not yet in stock. Check back soon!'

    if (index > 2) {
        res.send(message2)
    }

    else {
        const message = `So, you want the ${collectibles[index].name}? For ${collectibles[index].price} it can be yours!`;
        res.send(message)
    }
});

app.get('/hello', (req, res)=>{
    res.send(`Helllo there ${req.query.name}. I hear you are ${req.query.age} years old.`)
})

app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const type = req.query.type
    const shoeList = []

    

    shoes.forEach((shoe) => {
        if (shoe.price > minPrice){
            shoeList.push(shoe.name)
        }
        else if (shoe.price < maxPrice){
            shoeList.push(shoe.name)
        }
        else if (shoe.type === type){
            shoeList.push(shoe.name)
        }
            
    });
    
    res.send(shoeList)
    
})

  // Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })