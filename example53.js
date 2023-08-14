let instructor = {
    name : "Matt",
    mathWizard : true,
    dogOwner : true
};

for(let singleKey in instructor){
    console.log(instructor[singleKey]);
}