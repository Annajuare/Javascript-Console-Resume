//Name Section:

let myName = "Anna J.";

function toLogNameUpperCase(name) {
    console.log("Name:" + myName.toUpperCase())
}
toLogNameUpperCase(myName);

//Career Section:

let myCareer = "Physical Therapy";

function toLogCareerName(career) {
    console.log("Career:" + myCareer);
}
toLogCareerName(myCareer);

//Description Section:

let myDescription = "I work with disabled patients.";

function toLogDescription(description) {
   console.log("Description:" + myDescription);
}
toLogDescription();

//Function that has displayPosition:

let myCompanyName = "ForPoorandHomeless.com";
function displayPosition(companyName) {
   console.log("My Company:" + myCompanyName);  
   }

displayPosition();


let myJobTitle = "Founder";
function displayPositionTwo(jobTitle) {
    console.log("My Job Title:" + myJobTitle);
}
displayPositionTwo();


let theDescription = "A website for the poor and homeless";
function displayPositionThree(description) {
    console.log("My Description:" + theDescription);
}
displayPositionThree();

//My Interests Section:
  
function toLogInterests(interests) {
    console.log("My Interests:");
    for (let i = 0; i < interests.length; i++) {
        console.log( " * " + interests[i]);  
  }
}

 let myInterests = ["crafts", "oil painting", "helping the poor", 
    "taking care of my family"];
toLogInterests(myInterests);

//My Previous Experience Section:

function toLogPrevious(experience) {
    console.log("My Previous Experience:");
    for (let i = 0; i < experience.length; i++) {
        console.log( " * " + experience[i]);   
  }   
}
let myPrevious = ["Physical Therapy", "Worked with disabled patients",
   "Worked in various hospitals", "Worked an an assistant to the Dean"];
        
   toLogPrevious(myPrevious);
   
//My List of Skills:

function toLogSkills(skills) {
    console.log("A List of My Skills:");
    for(let i = 0; i < skills.length; i++) {
        console.log( " * " + skills[i]);
 }
}
let mySkills = ["BAM Knowledge of Physical Therapy Skills", 
   "BAM knowledgable in HTML and CSS", "BAM Can design some websites"];
  toLogSkills(mySkills);

  
