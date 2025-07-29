//create a function that converts a o'level grade to number

function convertGrade(str){
    let input = str.toLowerCase();
    let result = input === "a1" ? 10 :
                input === "b2" ? 9 :
                input === "b3" ? 8 :
                input === "c4" ? 7 :
                input === "c5" ? 6 :
                input === "c6" ? 5 : 
                !input ? 0 : 0;
    return result;
}
//test...
console.log(convertGrade("C4"));
//test passed...
const firstGrade = document.getElementById("grade-one");
const secondGrade = document.getElementById("grade-two");
const thirdGrade = document.getElementById("grade-three");
const fourthGrade = document.getElementById("grade-four");
const submitBtn = document.getElementById("submit");
const jambScore = document.getElementById("jamb-score");
const sittings = document.getElementById("sittings");
const popupContainer = document.getElementById("pop-ctn");
const scores = document.getElementById("pop-score");
const closePopup = document.getElementById("close-btn");
const secondSubject = document.getElementById("second");
const thirdSubject = document.getElementById("third");
const fourthSubject = document.getElementById("fourth");
const department = document.getElementById("department");
const popupBox = document.getElementById("popup");

submitBtn.addEventListener("click", () => {
    

    let gradeOne = convertGrade(firstGrade.value);
    let gradeTwo = convertGrade(secondGrade.value);
    let gradeThree = convertGrade(thirdGrade.value);
    let gradeFour = convertGrade(fourthGrade.value);
    let jambResultFuse = (jambScore.value) * 0.15;
    let finalResult = gradeOne + gradeTwo + gradeThree + gradeFour + jambResultFuse;
    let finalScore = sittings.value === "1" ? finalResult : (finalResult - 2);
    let resultingScore = (finalScore).toFixed(1);
    if(department.value === "Select Department") {
        alert("Department must be selected to continue.");
    }
    else if((secondSubject.value === "Select Subject")||(thirdSubject.value === "Select Subject")||(fourthSubject.value === "Select Subject")){
        alert("All Subjects must be selected to continue.")
    } else if((secondSubject.value === thirdSubject.value)||(secondSubject.value === fourthSubject.value)||(thirdSubject.value === fourthSubject.value)) {
        alert("You cannot select the same subject more than once.")
    } else if(sittings.value === "Select Sitting") {
        alert("Please select number of sittings to continue");
    }
    else if(jambScore.value === "") {
        alert("You must enter your jamb score to continue");
    } else if(jambScore.value > 400){
        alert("Your Jamb score input must be between the range of 0 and 400");
    }
    else {
    popupContainer.style.display = "flex";
    scores.textContent = resultingScore;
    popupContainer.classList.remove("hide-animation");
    popupBox.classList.add("show")
    }
    
})
    
popupBox.addEventListener("click", (event) => {
    event.stopPropagation();
})
closePopup.addEventListener("click", () => {
    popupContainer.classList.add("hide-animation");
    popupBox.classList.remove("show");
    setTimeout(() =>{
    popupContainer.style.display = "none"
}, 300);
    scores.textContent = ""
    firstGrade.selectedIndex = 0;
    secondGrade.selectedIndex = 0;
    thirdGrade.selectedIndex = 0;
    fourthGrade.selectedIndex = 0;
    secondSubject.selectedIndex = 0;
    thirdSubject.selectedIndex = 0;
    fourthSubject.selectedIndex = 0;
    sittings.selectedIndex = 0;
    department.selectedIndex = 0;
    jambScore.value = "";
})
jambScore.addEventListener("input", () => {
    jambScore.value = jambScore.value.replace(/[^\d]/g, "");
});