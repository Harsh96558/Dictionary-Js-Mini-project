let Input=document.getElementById('input')
let Mean_con=document.getElementById('meaning-container')
let Title=document.getElementById('title')
let Meaning=document.getElementById('meaning')

let Info_text=document.getElementById('info-text')


Input.addEventListener('keyup', (e)=>{

    async function fetchapi(word){

        try {


             // Info_text.style.display="block"
        Info_text.textContent=(`Searching the meaning of the ${word}`)



        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}` 
        const res= await fetch(url)
        const data= await res.json()

        Mean_con.style.display="block"
        Info_text.style.display="none"

        Title.textContent=(e.target.value)
        Meaning.textContent=(data[0].meanings[0].definitions[0].definition)
        


            
        } catch (error) {
            console.log(error)
            
        }

        
       


        

 




        
        
        
    }







        
    if(e.target.value && e.key ==="Enter")
   fetchapi(e.target.value)

   

})