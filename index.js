const usertab=document.queryselector("[data-userweather]")
const searchtab=document.queryselector("[data-searchweather]")
const usercontainer=document.queryselector(".weather-container")
const grantAccessContainer=document.queryselector(".grant-location-container")
const searchform=document.queryselector(".loading-container");
const loadingscreen =document.queryselector(".loading-container");
const userinfocontainer=document.querySelector(".user-info-container");



//initial variables

let currenttab=usertab;
const API_KEY="";
currenttab.classlist.add("current-tab");


function switchtab(clickedtab){
    if(clickedtab!=currenttab)
    {
        currenttab.classlist.remove("current-tab");
        currenttab=clickedtab ;
        currenttab.classlist.add("current-tab")

        if(!searchform.classlist.contains("active")){
            userinfocontainer.classList.remove("active");
            grantAccessContainer.classList.remove("acive");
             searchform.classlist.add("active");

        }

        else {
            searchform.classList.remove("active");
            userinfocontainer.classList.remove("active");
            getfromsessionstorage();
              
        }

    }
}

usertab.addEventListner("click",()=>{

switchtab(usertab);

});


searchtab.addEventListner("click",()=>{

    switchtab(searchtab);
    
 });
