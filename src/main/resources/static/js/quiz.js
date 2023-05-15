// question1
const responseTexts = {
  checkbox1:
    "Rethink about yourself: Think about the consequences of these behaviours caused to others.",
  checkbox2:
    "Ignoring: You can choose to ignore them if you want to. It will not cause any harm to you if you ignore these comments. ",
  checkbox3:
    "Reach out: Depending on the seriousness of the situation, you can choose to directly speak up to help or via indirect methods like reporting to the higher authorities at the back.",
};
// question2
const responseTexts2 = {
  checkbox1:
    "Practise good communication skills: Practise active listening, express yourself assertively without resorting to bullying tactics, and strive to resolve conflicts in a peaceful and respectful manner.",
  checkbox2:
    "Avoid bystanding: Never be a bystander when encountering these situations. Offer helps to the individuals who were being targeted.",
  checkbox3:
    "Seek professional help: Talk to a counsellor or therapist to help to identify and seek ways on learning effective communication and conflict resolution skills, which can reduce the likelihood of engaging in bullying behaviour.",
};
// question3
const responseTexts3 = {
  checkbox1:
    "Speak up: You can calmly and assertively let them know that what they are doing is wrong and that it needs to stop.",
  checkbox2:
    "Educate and reflect personal behaviour: Learn about the consequences of bullying and apologise to victims and reflect on your past behaviour. Recognize that bullying behaviour is harmful and can have serious consequences such as potential legal and ethical consequences.",
  checkbox3:
    "Seek professional help: If the bullying has a significant impact on your mental health and well-being, consider seeking support from a mental health professional, such as a therapist or counsellor.",
};
// question4
const responseTexts4 = {
  checkbox1:
    "Seek professional help: Consider talking to a counsellor or therapist about the bullying. They can help you work through your feelings and develop strategies for dealing with the situation.",
  checkbox2:
    "Seek for help: If it is difficult to control the bullying behaviour, consider seeking help from a mentor, counsellor, or mental health professional. They can provide you with support, guidance, and strategies to help you change your behaviour in a positive way.",
  checkbox3:
    "Offer support: Showing support and empathy towards the victim, and letting them know that you care and are willing to support them.",
};

// question5
const responseTexts5 = {
  checkbox1:
    'Be Assertive: Practise assertiveness skills, which help you be prepared to stand up for yourself in a calm and confident manner. Use "I" statements to express your feelings and set clear boundaries with the person who is bullying you.',
  checkbox2:
    "Tip: It’s good to know you are not involved in bullying. And make sure never stand by and watch or encourage bullying behaviour.",
  checkbox3:
    "Acknowledge your behaviour: It is important to recognize that your actions are not acceptable and take responsibility for them. Acknowledge the harm you have caused and commit to changing your behaviour.",
};
// question6
const responseTexts6 = {
  checkbox1:
    "Tip: It’s good to know you are not involved in bullying. However, please ensure that you will never be the bystanders or indirect bully in such situations.",
  checkbox2:
    "A new way to show off: In sports programs, competition is part of the game. Coaches and leaders can focus on teamwork and skill-building to bring out the best in their students. In sports games you can show your power and skills under a rule and focus more on teamwork to achieve some common target. Also it can be a good chance to help other people who might not be as strong as you to build their body and grow together.",
  checkbox3:
    "Report the bullying: If you witness bullying or mistreatment, report it to a teacher, counsellor, or other trusted adult. This can help prevent further incidents and ensure that the victim receives the support they need.",
};

// question7
const responseTexts7 = {
  checkbox1:
    "Sorry to hear this response. If someone is hurting you, please get in touch with your parents and teachers. And consider discussing bullying with a counsellor. They can help you work through your feelings and develop strategies for dealing with the situation.",
  checkbox2:
    "Sorry to hear this response. Even if you apologise afterwards, it has hurt you at the time it happened. Please identify whether the other person acted deliberately and, if so, set clear boundaries with them. And ask your parents and teachers for help.",
  checkbox3:
    "Acknowledge your behaviour: It is important to recognize that your actions are not acceptable and take responsibility for them. Acknowledge the harm you have caused and commit to changing your behaviour.",
};

// question8
const responseTexts8 = {
  checkbox1:
    "Keep evidence of being bullied: Keep a record of the bullying incidents, including dates, times, and details of what happened. It is essential and useful if you need to report the bullying to university or relevant authorities.",
  checkbox2:
    "Reflect on personal actions: Apologise to victims and reflect on your past behaviour. Recognize that bullying behaviour is harmful and can have serious consequences for the victim, as well as for the bully.",
  checkbox3:
    "Speak up: If you witness direct or indirect bullying, it is important to speak up and let the bully know that their behaviour is not acceptable.",
};

// question9
const responseTexts9 = {
  checkbox1:
    "Keep evidence of being bullied: Keep a record of the bullying incidents, including dates, times, and details of what happened. It is essential and useful if you need to report the bullying to university or relevant authorities.",
  checkbox2:
    "Reflect on your behaviour: Apologise to victims and reflect on your past behaviour. Recognize that bullying behaviour is harmful and can have serious consequences for the victim, as well as for the bully. Take responsibility for your actions.",
  checkbox3:
    "Report bullying: If you witness bullying or mistreatment, report it to a counsellor, relevant government authorities, etc., depending on the seriousness of the situation.",
};

// question10
const responseTexts10 = {
  checkbox1:
    "Report bullying: If you witness bullying or mistreatment, report it to a counsellor, relevant government authorities, etc., depending on the seriousness of the situation. E.g.: if the bullying is serious, report it to the police; if the bullying occurs on Facebook, report it to Facebook.",
  checkbox2:
    "Stand up and speak up: Don't be afraid to speak up for yourself when you feel like you are being pushed around. Use a calm and assertive tone, and let others know how you feel and what you need from them.",
  checkbox3:
    "Protect yourself: Don’t let yourself be the new target of bullying and get away from the situation.",
  checkbox4:
    "Report bullying: If you witness bullying or mistreatment, report it to a teacher, counsellor, relevant government authorities, etc., depending on the seriousness of the situation. E.g.: if the bullying is serious, report it to the police; if the bullying occurs on Facebook, report it to Facebook.",
};

const list1Checkboxes = document.querySelectorAll('input[name^="list1"]');
const list2Checkboxes = document.querySelectorAll('input[name^="list2"]');
const list3Checkboxes = document.querySelectorAll('input[name^="list3"]');
const list4Checkboxes = document.querySelectorAll('input[name^="list4"]');
const list5Checkboxes = document.querySelectorAll('input[name^="list5"]');
const list6Checkboxes = document.querySelectorAll('input[name^="list6"]');
const list7Checkboxes = document.querySelectorAll('input[name^="list7"]');
const list8Checkboxes = document.querySelectorAll('input[name^="list8"]');
const list9Checkboxes = document.querySelectorAll('input[name^="list9"]');
const list10Checkboxes = document.querySelectorAll('input[name^="lista"]');

//numbers
let somenumber = 5;
console.log("the intitla number is: " + somenumber);
console.log("the victime is: number <= 3.5");
console.log("the bystander is: 3.5 < number <= 6.5");
console.log("the bully is: 6.5 < number");

const submitBtn = document.getElementById("submit-btn");

//something new here
function checkAnswers() {
  var questions = document.querySelectorAll("ul");
  let countChecked = 0;
  console.log("The updated number is: " + somenumber);

  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    var checked = question.querySelectorAll("input:checked");

    if (checked.length === 1) {
      countChecked++;
    }
    if (countChecked === 10) {
      submitBtn.classList.remove("hide");
    }
  }
}
//end

list1Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText1();
    checkAnswers();
  });
});

function updateResponseText1() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list1"]:checked'
  );
  const responseText = document.getElementById("suggestion1");
  const suggestionBox = document.getElementById("suggestion-box1");
  if (checkedCheckboxes.length > 0) {
    list1Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      }
      // console.log("the current number is: " + somenumber);
      // here
      // here
      text += responseTexts[checkbox.id] + " ";
      //
      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list2Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText2();

    checkAnswers();
  });
});

function updateResponseText2() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list2"]:checked'
  );
  const responseText = document.getElementById("suggestion2");
  const suggestionBox = document.getElementById("suggestion-box2");
  if (checkedCheckboxes.length > 0) {
    list2Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 0.5;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 1;
      }
      // console.log("the number is: " + somenumber);
      // here
      // 4.5 - 5   //    5 - 5.5
      // here
      text += responseTexts2[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list3Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText3();
    checkAnswers();
  });
});

//question 3
function updateResponseText3() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list3"]:checked'
  );
  const responseText = document.getElementById("suggestion3");
  const suggestionBox = document.getElementById("suggestion-box3");
  if (checkedCheckboxes.length > 0) {
    list3Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber + 0.5;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber - 1;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts3[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list4Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText4();
    checkAnswers();
  });
});

function updateResponseText4() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list4"]:checked'
  );
  const responseText = document.getElementById("suggestion4");
  const suggestionBox = document.getElementById("suggestion-box4");
  if (checkedCheckboxes.length > 0) {
    list4Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts4[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list5Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText5();
    checkAnswers();
  });
});

function updateResponseText5() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list5"]:checked'
  );
  const responseText = document.getElementById("suggestion5");
  const suggestionBox = document.getElementById("suggestion-box5");
  if (checkedCheckboxes.length > 0) {
    list5Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 1;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts5[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list6Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText6();

    checkAnswers();
  });
});

function updateResponseText6() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list6"]:checked'
  );
  const responseText = document.getElementById("suggestion6");
  const suggestionBox = document.getElementById("suggestion-box6");
  if (checkedCheckboxes.length > 0) {
    list6Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts6[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list7Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText7();

    checkAnswers();
  });
});

function updateResponseText7() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list7"]:checked'
  );
  const responseText = document.getElementById("suggestion7");
  const suggestionBox = document.getElementById("suggestion-box7");
  if (checkedCheckboxes.length > 0) {
    list7Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 1;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts7[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list8Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText8();
    checkAnswers();
  });
});

function updateResponseText8() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list8"]:checked'
  );
  const responseText = document.getElementById("suggestion8");
  const suggestionBox = document.getElementById("suggestion-box8");
  if (checkedCheckboxes.length > 0) {
    list8Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts8[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list9Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText9();

    checkAnswers();
  });
});

function updateResponseText9() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="list9"]:checked'
  );
  const responseText = document.getElementById("suggestion9");
  const suggestionBox = document.getElementById("suggestion-box9");
  if (checkedCheckboxes.length > 0) {
    list9Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber - 1;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 1;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      }
      // console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts9[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

list10Checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateResponseText10();

    checkAnswers();
  });
});

function updateResponseText10() {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name^="lista"]:checked'
  );
  const responseText = document.getElementById("suggestion10");
  const suggestionBox = document.getElementById("suggestion-box10");
  if (checkedCheckboxes.length > 0) {
    list10Checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkedCheckboxes) {
        otherCheckbox.disabled = true;
      }
    });
    let text = "";
    checkedCheckboxes.forEach(function (checkbox) {
      // here
      // here
      if (checkbox.id === "checkbox1") {
        somenumber = somenumber + 0.2;
      } else if (checkbox.id === "checkbox2") {
        somenumber = somenumber + 0.5;
      } else if (checkbox.id === "checkbox3") {
        somenumber = somenumber + 0.5;
      } else if (checkbox.id === "checkbox4") {
        somenumber = somenumber + 0.5;
      }
      console.log("the number is: " + somenumber);
      // here
      // here
      text += responseTexts10[checkbox.id] + " ";

      suggestionBox.classList.remove("hide");
      responseText.textContent = text;
    });
  } else {
    responseText.textContent = "";
  }
}

//submit button onclick change to anothe page

submitBtn.addEventListener("click", goResult);

function goResult() {
  console.log("the final number is: " + somenumber);
  if (somenumber <= 3.5) {
    window.location.href = "victim.html";
  } else if (somenumber <= 7) {
    window.location.href = "bystander.html";
  } else {
    window.location.href = "bully.html";
  }
}
