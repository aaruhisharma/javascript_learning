let programing = {
    languages: ["JavaScript","Python","Ruby"],
    isChallenging:true,
    isRewarding:true,
    difficulty:8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
};

for(let languages of programing.languages){
    console.log(languages);
}


for(i=0; i<programing.languages.length; i++){
    console.log(programing.languages[i]);
}