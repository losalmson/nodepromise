//funktion som returnerar ett nytt Promise
function myFetch(url){
    const myPromise = new Promise((resolve, reject) => { //skapa en new Promise
        // Simulating an asynchronous operation 
        setTimeout(() => { //sätt en timeout
             resolve({
                name: 'Foppa',
 			    jersey:21,
 			    age:52
             }); 
            }, 10000); 
         }); 
     return myPromise //returnera ett Promise

        
 };

//varje folder blir en module som vi kan använda
//t.ex. body-parser module innehåller en "exports" så vi kan import / use
//Berätta vad vi ska exportera --> i detta fall ett object som innehåller en funktion myFetch{}:
 module.exports= {
    myFetch // ett object som innhehåller en Property --> myFetch: myFetch, som i sn tur innehåller en funktion
 };

 // Vi hade även kunnat exportera en funktion, t.ex.
 
 //function test() {
//     console.log('testing');
//  };
//  module.exports = test