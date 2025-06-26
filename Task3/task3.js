const quizData= [
    {
        question:"Who is popularly known as 'King of Pop' in Music World??",
        options:["Prince","Ed-Sheeran","Michael Jackson","shakira"],
        answer:"Michael Jackson"
    },
     {
        question:"What is the name of the country which its second Cricket World Cup after 28 years ??",
        options:["India","Australia","West Indies","England"],
        answer:"India"
    },
     {
        question:"Who is popularly considered as 'The Wall of Indian Cricket??'",
        options:["Chateswar pujara","Rahul Dravid","Sachin Tendulkar","V.V.S.Laxman"],
        answer:"Rahul Dravid"
    },
]

let currentQuestIndex=0;
let userAnswers=new Array(quizData.length).fill(null);
let showAnswers = false;

let questioncontainer = document.getElementById("question-container");
let previousbtn=document.getElementById("prev");
let nextbtn=document.getElementById("next");
let submitbtn=document.getElementById("submit");
let result=document.getElementById("result");

const loadQuestion = () => {
    const qData = quizData[currentQuestIndex]; // Make sure this is inside the function
    const userAnswer = userAnswers[currentQuestIndex];
    questioncontainer.innerHTML = `
        <p>${qData.question}</p>
        <ul>
            ${qData.options.map((opt) => {
                console.log(opt); // Log the option in JavaScript
                let className = "";
                if (showAnswers) {
                    if (opt === qData.answer) {
                        className = "correct-answer";
                    } else if (opt === userAnswer && userAnswer !== qData.answer) {
                        className = "incorrect-answer";
                    }
                }
                return `
                    <li class="${className} options">
                        <label>
                            <input type="radio" name="option" value="${opt}"
                                ${userAnswers[currentQuestIndex] === opt ? 'checked' : ''}>
                            ${opt}
                        </label>
                    </li>
                `;
            }).join('')}
        </ul>
    `;
};

previousbtn.addEventListener("click",()=>
{
    if(currentQuestIndex>0)
        currentQuestIndex--;
    loadQuestion();
});

nextbtn.addEventListener("click",()=>
{
  const selectedOption=document.querySelector('input[name="option"]:checked')
  if(selectedOption){
    userAnswers[currentQuestIndex]=selectedOption.value
  }
    if(currentQuestIndex< quizData.length-1){
        currentQuestIndex++
    loadQuestion();
    }
});
submitbtn.addEventListener("click",()=>{
    const selectedOption=document.querySelector('input[name="option"]:checked')
    if(selectedOption){
    userAnswers[currentQuestIndex]=selectedOption.value
}
    // else if(!selectedOption){
    //     error("Select the choice");
    // }
let score=0;
quizData.forEach((opt,i)=>{
    if(userAnswers[i]===opt.answer){
        score++
}
});

    showAnswers = true;
    loadQuestion();

    result.innerHTML = `<h2>Your total score is : ${score}/${quizData.length}</h2>`;
    previousbtn.disabled = false;
    nextbtn.disabled = false;
    submitbtn.disabled = true;

});

loadQuestion();


// Carousel logic
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const showImage = (index) => {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
};

const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
};

const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
};

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Optional: Auto-play every 3 seconds
setInterval(nextImage, 3000);

// Initially show first image
showImage(currentImageIndex);


//Random Joke generator using fetch api
const fetchJoke =()=>{
    const jokeDiv = document.getElementById("joke")
    fetch("https://sv443.net/jokeapi/v2/joke/Any")
                .then(res=>res.json())
                .then(data=>{
                    if(data.type=="single"){
                        jokeDiv.innerHTML=`<p> 🃏${data.joke}`;
                    }
                    else if(data.type=="twopart"){
                        jokeDiv.innerHTML=`
                        <p> 🧩${data.setup}
                        <p> 🤣${data.delivery}`;
                    }
})
                .catch(err=>
                {
                     console.error("Error fetching joke:", err);
                     jokeDiv.innerHTML = "<p>❌ Failed to load joke. Please try again.</p>";
                })
            }
         let jokeButton=document.getElementById("jokebtn")
         jokeButton.addEventListener("click",fetchJoke);


