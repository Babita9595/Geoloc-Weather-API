
            var toggleDark=()=>{
                var mybody = document.body;
              mybody.classList.toggle('body')
            }


            window.onload = function(){  
                
                //geolocation function
                let x = document.getElementById('out');
            let y = document.getElementById('weather');
            let z = document.getElementById('location');

            var geo = document.getElementById('Geoloc')  //target button 
            geo.onclick = function(){
            
                
             geo.classList.toggle('geolocation'); //button is toggle to perform operation


            //function geolocation() {
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText= "Geo Not Supported"
                }
            }

            function showPosition(data){ //nested function
                console.log(data)
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
               // x.innerText = `Lat is ${lat} & long is ${long}`;
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
                //api calling
                fetch(url,{method:'GET'})
                //return promise
                .then((res) => res.json())
                // resolve the promise
                .then((data) => {
                    
                    y.innerText = ` City is ${data.city.name}`
                   z.innerText = `temp of day ${data.list[0].temp.day} °C`
                    z.style.color = 'white';
                    y.style.color = 'white';
                    
                })

            }
            //geolocation end
























           var element = document.getElementById('DarkMode');
           var mybody = document.querySelector('body');
           const navi = document.getElementsByTagName('nav')[0] ; 
           const icon = document.getElementById('IconBar')
           
           
//-----------------------------------



           
           element.onclick = function(){ // moon  icon is toggle by clicking perform operationd
//-----------------------------------------

element.classList.toggle('bi-brightness-high-fill'); //sun icon is toggle
if(element.classList.toggle('bi-moon')){ 
  
mybody.style.color = 'black';
mybody.style.background = 'white';
navi.style.background = 'blue';
icon.style.background = 'white';
const links = document.getElementsByTagName('a');

           for(i=3; i<9; i++){

           
                   
           if(links[i].href)
           {
               links[i].style.color = 'black';  
           }     
 
 
          else{

            console.log('this is not ref')
           }

           console.log('hello')

          }




 // mybody.document.classList.remove('body');
 // element.classList.toggle('bi-brightness-high-fill');
      console.log("papahello");


   }else{

    
     console.log('myhello');
  


//--------------------------------------------
            mybody.style.color = 'white';
            mybody.style.background = 'black';
            navi.style.background = 'black';
           icon.style.background = 'black';
           
           
           const links = document.getElementsByTagName('a');

           for(i=3; i<9; i++){

           
                   
           if(links[i].href)
           {
               links[i].style.color = 'white';  
           }     
 
 
          else{

            console.log('this is not ref')
           }

           console.log('hello')

          }
        }

       
      }   
         


          }


         
       
   