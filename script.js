     const s_Details = document.querySelector(".showDetails");
         const fullAddress=document.querySelector('.fullAddress');

         const formatedAddress=document.querySelector('.formatedAddress');


        let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json?";
        let apiKey ="e9dbdb3b76de4b60b8f37e740db0cc36";




const getUserCurrentAdd = async (latitude ,longitude) => {

let query = `${latitude} , ${longitude}`;
let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`;
try{
    const res = await fetch(apiUrl); //api call
    const data = await res.json();

   //console.log(data.results[0]);


     const {city ,state ,postcode,country } = data.results[0].components;

     fullAddress.innerText = `User address : ${city}, ${postcode} , ${state}, ${country}`;

     formatedAddress.textContent=`User full address : ${data.results[0].formatted}`;
     
     
}catch(error){
    console.log(error.message);
}
};

        document.querySelector('.geo-btn').addEventListener("click", () => {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition((position) => {

            //        console.log(position.coords.latitude );
const {latitude , longitude } = position.coords;
                    
       s_Details.innerHTML = `the latitude ${latitude} and longnitude ${longitude}` ;

       getUserCurrentAdd(latitude,longitude);

                }, (error) => {
                   console.log(error.message);
                    s_Details.innerText=error.message;
                }
                );
            }

        })




