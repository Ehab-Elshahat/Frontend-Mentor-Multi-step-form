
let stepsTitles = document.querySelectorAll("aside .steps li");
let sections = document.querySelectorAll(".section-box");
let goBackBtn = document.querySelector(".go-back-btn");
let nextBtn = document.querySelector(".next-btn");
let inputsField = document.querySelectorAll(".section-box form input");
let controlsBox = document.querySelector(".controls");
let summerySection = document.querySelector(".section-box.summary");

// Add Class Active On Step Title And Remove It From Each Step Titles
stepsTitles.forEach((step, index) => {
  step.addEventListener("click", () => {
    stepsTitles.forEach((item) => {
      item.classList.remove("active");
    });
    step.classList.add("active");

    // Add Class Active On Section Title And Remove It From Each Sections
    sections.forEach((section) => section.classList.remove("active"));
    sections[index].classList.add("active");

    changeStatOfNextBtn()
    showHidGoBackBtn();

  });
});

// Show Hide Go Back Btn
function showHidGoBackBtn() {
  if (sections[0].classList.contains("active")) {
    goBackBtn.classList.remove("active");
  } else {
    goBackBtn.classList.add("active");
  }
}

function changeStatOfNextBtn(){
  if (
    document.querySelector("aside .steps li.active").nextElementSibling !== null
  ) {

    if(sections[0].classList.contains("active")){
      goBackBtn.style.display = "none"
    } else {
      goBackBtn.style.display = "block"
    }
    nextBtn.innerHTML = "Next Step";
    nextBtn.classList.remove("stop");
  } else {
    nextBtn.innerHTML = "Confirm";
    nextBtn.classList.add("stop");
  }
}

// Next Btn Event
nextBtn.addEventListener("click", () => {
  // If Step Is Not Last Of Type Click On It
  if (
    document.querySelector("aside .steps li.active").nextElementSibling !== null
  ) {
    document.querySelector("aside .steps li.active").nextElementSibling.click();
    nextBtn.innerHTML = "Next Step";
    nextBtn.classList.remove("stop");
  } 
  if(nextBtn.classList.contains("stop")){
    sections.forEach(section => {
      section.classList.remove("active")
    })
    sections[sections.length-1].classList.add("active");
    nextBtn.style.display = "none"
    goBackBtn.style.display = "none"
    controlsBox.style.display="none"
   
  }

  handelNextBtn();
  
});

// Handel Next btn
function handelNextBtn() {
  if (summerySection.classList.contains("active")) {
 
    nextBtn.classList.add("stop");
    nextBtn.innerHTML = "Confirm";
    
  } 
  
}

// Go Back Event
goBackBtn.addEventListener("click", () => {
  document
    .querySelector("aside .steps li.active")
    .previousElementSibling.click();
});

// Plans active
let plans =  document.querySelectorAll(".plan");
plans.forEach(plan => {
  plan.addEventListener("click", () => {
    plans.forEach(plan =>{plan.classList.remove("active")})
    plan.classList.add("active")
  })
})

// Handel Monthly Yearly
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let btnBill = document.querySelector(".btn-bill");
let picAmount = document.querySelectorAll(".pick-amount span");
let arcadeTitle = document.querySelector(".arcade div h3 span");
let finishUpPrice = document.querySelectorAll(".finish-box div span span");
let totalTitle = document.querySelector(".total h4 span");
let totalSpan = document.querySelector(".total span span");

monthly.addEventListener("click", function () {
  yearly.classList.remove("active");
  monthly.classList.add("active");
  btnBill.classList.remove("yearly");
  btnBill.classList.add("monthly");
  setMonthYearPlans();
});
yearly.addEventListener("click", function () {
  monthly.classList.remove("active");
  yearly.classList.add("active");
  btnBill.classList.remove("monthly");
  btnBill.classList.add("yearly");
  setMonthYearPlans();
});

// Set Yearly Monthly Plans
function setMonthYearPlans(){
  if (monthly.classList.contains("active")) {
    picAmount.forEach((item) => {
      item.innerHTML = "mo";
    });
    arcadeTitle.innerHTML = "(Monthly)"
    finishUpPrice.forEach(item => {
      item.innerHTML = "mo"
    })
    totalTitle.innerHTML = "(Per Month)";
    totalSpan.innerHTML = "mo"
  }

  if (yearly.classList.contains("active")) {
    picAmount.forEach((item) => {
      item.innerHTML = "yr";
    });
    arcadeTitle.innerHTML = "(Yearly)";
    finishUpPrice.forEach((item) => {
      item.innerHTML = "yr";
    });
    totalTitle.innerHTML = "(Per Year)";
    totalSpan.innerHTML ="yr"
  }
} 

validationForm();
function validationForm(){
  if(sections[0].classList.contains("active")) {
    inputsField.forEach(input => {
      input.addEventListener("blur", () => {
        if (input.value == "") {
          input.classList.add("empty");
          input.nextElementSibling.style.display = "block"
        } else {
          input.nextElementSibling.style.display = "none";
          input.classList.remove("empty");
        }
      })
      
    })
  }
}

