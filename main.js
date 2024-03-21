

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
     {occupation : `chef`,description : `Chefs are culinary magicians who turn ingredients into delicious meals that delight the senses. From gourmet dishes to comfort foods, chefs use their skills and passion to create tasty experiences that bring people together around the dinner table.`, id: 1},
     {occupation : `astronomer`, description : `Astronomers are cosmic explorers who study the stars, planets, and mysteries of the universe. They use telescopes and scientific tools to unravel the secrets of space, expanding our understanding of the cosmos and our place within it.` },
     {occupation : `doctor`, description : `Doctors are real-life superheroes who help people feel better when they're sick or hurt. They use their knowledge and skills to diagnose illnesses, provide treatment, and promote healthy living for a brighter, happier future.` },
     {occupation : `farmer`, description : `Farmers are nature's caretakers who work hard to grow the food we eat and take care of the land. They nurture plants and animals, harvest crops, and ensure we have fresh, healthy food to nourish our bodies and sustain our communities` },
     {occupation : `police`, description : `Joining the police force means protecting and serving your community. Police officers help keep neighborhoods safe, solve crimes, and ensure everyone follows the rules to make the world a better place.` },
     {occupation : `teacher`, description : `Teachers are mentors and guides who inspire young minds to learn, grow, and succeed. They create engaging lessons, nurture creativity, and empower students to reach their full potential, shaping the leaders of tomorrow.` },
     {occupation : `Lawyer`, description : `Lawyers are champions of justice who use their knowledge of the law to defend people's rights and resolve legal disputes. Whether they're fighting for justice in the courtroom or providing legal advice, lawyers help ensure fairness and equality for all.` },
     {occupation : `Operator`, description : `Operators are tech-savvy problem solvers who keep the world running smoothly behind the scenes. Whether they're answering phones, operating machinery, or managing computer systems, operators play a vital role in keeping things moving efficiently.` },
     {occupation : `Firefighter`, description : `Firefighters are brave heroes who rush into danger to keep us safe from fires and other emergencies. They work as a team to rescue people, protect property, and extinguish flames, showing courage and selflessness in the face of danger.` },
     {occupation : `Designer`, description : `Designers are creative wizards who bring ideas to life through art, fashion, or digital media. Whether they're crafting beautiful clothes, designing cool websites, or dreaming up imaginative worlds, designers add beauty and style to the world around us.` }
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

const occupationPicture = document.querySelector('.picture');

// const getAvatarURL = `https://avatar.iran.liara.run/public/job/${id}/female`;


const getOccupation = async (id) => {
     try {
          const occupationResult = await axios.get(`https://avatar.iran.liara.run/public/job/${id}/female`);

          console.log(`try block called`);
          console.log(occupationResult);
          occupationPicture.src = occupationResult.data;


     } catch(error) {
          console.log(error);
     }
}


