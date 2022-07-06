
const init = () => {
  
    // const inputForm = document.querySelector('form')
    // inputForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const input = document.querySelector('input#searchByID')

    //     console.log(input.value);

    //     fetch(`http://localhost:3000/movies/${input.value}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         const title = document.querySelector('section#movieDetails h4');
    //         const summary = document.querySelector('section#movieDetails p');

    //         title.innerText = data.title;
    //         summary.innerText = data.summary;
    //     });
    // });

    /*
    - 
    - 

    */
    const inputForm = document.querySelector('form')
    //Add event listeners to capture form data and override a form's default behavior

    inputForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        //Fetch data based on what the user types into that form
        //1. define what we're grabbing
        let input;
        console.log("event.target", event.target)
        console.log("event.target.searchByID", event.target.searchByID)
        //event.target[id="searchByID"].value... event.target["searchByID"].value
        console.log("event.target.searchByID.value", event.target.searchByID.value); 
        input = event.target.searchByID.value
        //2. fetch from database
        //async/await
        let title = document.querySelector("#movieDetails h4")
        let summary = document.querySelector("#movieDetails p")

        try {
            let req = await fetch(`http://localhost:3000/movies/${input}`)
            console.log(`req is ${req}`)
            let data = await req.json();
            console.log(`from async await json is ${JSON.stringify(data)}`)
            if(data === {}) {
                title.innerText = "Movie Not Found"
                summary.innerText = ":("
            } else {
                title.innerText = data.title
                summary.innerText = data.summary
            }
            
        } catch (err) {
            console.log(":(")
            
        }
        

      
        


        
        //.then 
        // fetch(`http://localhost:3000/movies/${input}`)
        // .then(req => req.json())
        // .then(data => console.log("from .then", data))
        
    })
    console.log("lskdjf")
    console.log("sldkjf")

    /*
    formOne.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target //target refers to formOne
    })

    formTwo.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target //target refers to formTwo
    })
    */



}

document.addEventListener('DOMContentLoaded', init);