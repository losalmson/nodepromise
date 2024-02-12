const express = require('express') //vi kör en funktion
const app = express() //får tillbaka en app som vi kör!
const port = 3000; // "Radiofrekvens"

const {myFetch} = require('./FetchFromOtherSystem');

//Vi kan även skriva t.ex. 
// const objektet = require('./FetchFromOtherSystem')
// console.log(objektet.age);
// console.log(objektet.team);

app.get('/test',async (req,res)=>{
    console.log('now')
    let p = await  myFetch('adsadsads')
    console.log(p)
    res.status(200).json(p)
})

app.listen(port,  () => {
})
