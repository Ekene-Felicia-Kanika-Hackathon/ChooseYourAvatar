

//Pseudo Code for HACKATHON 
/* 

Endpoint for Avavtar api 



*/


// Steps NEEDED For Project
// Axios/Async Await 
// Url Variable 

/*  **********
***************************

START CODE HERE!!!!!! ******/


const occupationArr = [
     {occupation : `chef`,description : ``,},
     {occupation : `astronomer`, description : `` },
     {occupation : `doctor`, description : `` },
     {occupation : `farmer`, description : `` },
     {occupation : `police`, description : `` },
     {occupation : `teacher`, description : `` },
     {occupation : `Lawyer`, description : `` },
     {occupation : `Operator`, description : `` },
     {occupation : `Firefighter`, description : `` },
     {occupation : `Designer`, description : `` }
];


console.log(occupationArr);

// const occupation = `chef`;



 const userOccupation = () => {
     document.querySelector(`#occupation`).addEventListener(`change`, function (){
          const findOccupation = this.value;
          console.log(`change event listener called`);
          getOccupation(findOccupation);
          console.log(this.value);
          console.log(findOccupation);
          return findOccupation;
     })
}

userOccupation();


const getAvatarURL = `https://avatar.iran.liara.run/public/job/${occupationArr[0].id}/female`;


const getOccupation = async (id) => {
     try {
          const occupationResult = await axios.get(`https://avatar.iran.liara.run/public/job/${id}/female`);

          console.log(`try block called`);
          console.log(occupationResult.data);


     } catch(error) {
          console.log(error);
     }
}


