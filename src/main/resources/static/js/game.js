setTimeout(function () {
  var monitorContainer = document.getElementById("monitor-container");
  monitorContainer.innerHTML =
    '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span> </div> Game loading...';
}, 100);

setTimeout(function () {
  const myButton = document.getElementById("RollButton");
  const restartButton = document.getElementById("restart");

  myButton.style.display = "block";
  var questionContainer = document.getElementById("question-container");
  var monitorContainer = document.getElementById("monitor-container");
  var currentPosition = 0;
  const token1 = document.getElementById("token1");

  monitorContainer.innerHTML = "Game ready, roll a dice to start";

  function checkForSpecialPosition(position) {
    //scenario 1: ladder
    if (position === 6) {
      myButton.style.display = "none";
      questionContainer.style.display = "block";
      questionContainer.innerHTML =
        '<span class="question">You noticed that a student was excluded from group activities and conversations. What would you do to help the student feel more included?</span> <ul> <li> <input type="radio" id="radio1_1" name="options" /> <label for="radio1_1">Ignore the situation and continue with your own activities</label></li><li><input type="radio" id="radio1_2" name="options" /> <label for="radio1_2">Tell the student to find other friends to hang out with</label></li><li><input type="radio" id="radio1_3" name="options" /> <label for="radio1_3">Invite the student to join in on the group activities and conversations</label></li><li><input type="radio" id="radio1_4" name="options" /> <label for="radio1_4">Encourage the student to change their behaviour to fit in with the group</label></li></ul>';
      var radio1_1 = document.getElementById("radio1_1");
      var radio1_2 = document.getElementById("radio1_2");
      var radio1_3 = document.getElementById("radio1_3");
      var radio1_4 = document.getElementById("radio1_4");

      radio1_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio1_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio1_4.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio1_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: move to tile 34";
        currentPosition = 34;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 2: ladder
    else if (position === 22) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">Sarah is being excluded from a group of students during lunchtime because of her gender identity. The group mocks her appearance and mannerisms. If you overhear a group of students making derogatory comments about others gender identity, what would you do?</span> <ul> <li> <input type="radio" id="radio2_1" name="options" /> <label for="radio2_1">Ignore the exclusion and hope it will go away</label></li><li><input type="radio" id="radio2_2" name="options" /> <label for="radio2_2">Speak up and tell the group to stop their behaviour</label></li><li><input type="radio" id="radio2_3" name="options" /> <label for="radio2_3">Report the incident to a faculty member or a university administrator</label></li><li><input type="radio" id="radio2_4" name="options" /> <label for="radio2_4">Join in the conversation to fit in with the group</label></li></ul>';
      questionContainer.style.display = "block";
      var radio2_1 = document.getElementById("radio2_1");
      var radio2_2 = document.getElementById("radio2_2");
      var radio2_3 = document.getElementById("radio2_3");
      var radio2_4 = document.getElementById("radio2_4");

      radio2_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio2_4.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio2_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: move to tile 57";
        currentPosition = 57;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio2_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: move to tile 57";
        currentPosition = 57;
        console.log("Update here:" + currentPosition);
        console.log("Option 3 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 3: snake
    else if (position === 25) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">You have been bullying your classmates by calling them names and making fun of their appearance. Your classmate Jane has been a victim of your bullying. One day, you witness Jane crying in the bathroom. What would you do?</span> <ul> <li> <input type="radio" id="radio3_1" name="options" /> <label for="radio3_1">Continue bullying Jane because it is fun</label></li><li><input type="radio" id="radio3_2" name="options" /> <label for="radio3_2">Apologise to Jane and stop the bullying behaviour</label></li><li><input type="radio" id="radio3_3" name="options" /> <label for="radio3_3">Ignore the situation and continue with your own activities</label></li><li><input type="radio" id="radio3_4" name="options" /> <label for="radio3_4">Tell your friends about what you witnessed and make fun of Jane about this</label></li></ul>';
      questionContainer.style.display = "block";
      var radio3_1 = document.getElementById("radio3_1");
      var radio3_2 = document.getElementById("radio3_2");
      var radio3_3 = document.getElementById("radio3_3");
      var radio3_4 = document.getElementById("radio3_4");

      radio3_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: remain at the same tile";
      });

      radio3_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 20";
        currentPosition = 20;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio3_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 20";
        currentPosition = 20;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio3_4.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 20";
        currentPosition = 20;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 4: ladder
    else if (position === 46) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">A group of students are picking on a new student, Emma, who is from a different country. They make fun of her accent and the way she dresses, and refuse to include her in group activities.</span> <ul> <li> <input type="radio" id="radio4_1" name="options" /> <label for="radio4_1">Join in with the group and continue to exclude Emma</label></li><li><input type="radio" id="radio4_2" name="options" /> <label for="radio4_2">Stand up for Emma and try to include her in group activities</label></li><li><input type="radio" id="radio4_3" name="options" /> <label for="radio4_3">Report the situation to a teacher or school counsellor</label></li></ul>';
      questionContainer.style.display = "block";
      var radio4_1 = document.getElementById("radio4_1");
      var radio4_2 = document.getElementById("radio4_2");
      var radio4_3 = document.getElementById("radio4_3");

      radio4_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio4_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: remain at the same tile";
      });

      radio4_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: move to tile 76";
        currentPosition = 76;
        console.log("Update here:" + currentPosition);
        console.log("Option 2 is checked");

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 5: snake
    else if (position === 54) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">A group of students are making fun of a student, David, who has a disability. They imitate his mannerisms and make jokes about his condition, which is causing David to feel embarrassed and upset. If you are his friend, what actions can you take to support David and stop the bullying behaviour?</span> <ul> <li> <input type="radio" id="radio5_1" name="options" /> <label for="radio5_1">Continue to make fun of David and encourage others to join in</label></li><li><input type="radio" id="radio5_2" name="options" /> <label for="radio5_2">Speak up and tell the group to stop their behaviour</label></li><li><input type="radio" id="radio5_3" name="options" /> <label for="radio5_3">Encourage David to fight back and defend himself</label></li></ul>';
      questionContainer.style.display = "block";
      var radio5_1 = document.getElementById("radio5_1");
      var radio5_2 = document.getElementById("radio5_2");
      var radio5_3 = document.getElementById("radio5_3");

      radio5_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: remain at the same tile";
      });

      radio5_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 30";
        currentPosition = 30;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio5_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 30";
        currentPosition = 30;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 6: snake
    else if (position === 87) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">You are a bystander witnessing a group of students bullying your classmate, Hannah. They are teasing her, spreading rumours, and excluding her from group activities. You notice that Hannah is becoming increasingly isolated and withdrawn. What would you do?</span> <ul> <li> <input type="radio" id="radio6_1" name="options" /> <label for="radio6_1">Ignore and walk away from the situation to avoid the group taking revenge on you</label></li><li><input type="radio" id="radio6_2" name="options" /> <label for="radio6_2">Speak up and tell the bully group to stop their behaviour. Remind them that bullying is not acceptable and can have serious consequences</label></li><li><input type="radio" id="radio6_3" name="options" /> <label for="radio6_3">Report the students’ bully group</label></li></ul>';
      questionContainer.style.display = "block";
      var radio6_1 = document.getElementById("radio6_1");
      var radio6_2 = document.getElementById("radio6_2");
      var radio6_3 = document.getElementById("radio6_3");

      radio6_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: remain at the same tile";
      });

      radio6_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 69";
        currentPosition = 69;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio6_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 69";
        currentPosition = 69;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    } ////scenario 7: snake
    else if (position === 97) {
      myButton.style.display = "none";
      questionContainer.innerHTML =
        '<span class="question">You witness a group of students physically bullying a fellow student, pushing and shoving him while laughing. You know this behaviour is unacceptable and want to intervene. What would you do to stop the situation from escalating?</span> <ul> <li> <input type="radio" id="radio7_1" name="options" /> <label for="radio7_1">Walk away and pretend you didn‘t see anything</label></li><li><input type="radio" id="radio7_2" name="options" /> <label for="radio7_2">Join in on the bullying to fit in with the group</label></li><li><input type="radio" id="radio7_3" name="options" /> <label for="radio7_3">Yell at the bullies to stop and physically intervene if necessary</label></li><li><input type="radio" id="radio7_4" name="options" /> <label for="radio7_4">Report the incident to a university authority figure, such as a counsellor or security guard</label></li></ul>';
      questionContainer.style.display = "block";
      var radio7_1 = document.getElementById("radio7_1");
      var radio7_2 = document.getElementById("radio7_2");
      var radio7_3 = document.getElementById("radio7_3");
      var radio7_4 = document.getElementById("radio7_4");

      radio7_3.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Right answer: remain at the same tile";
      });

      radio7_1.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 61";
        currentPosition = 61;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio7_2.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 61";
        currentPosition = 61;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      radio7_4.addEventListener("change", function () {
        myButton.style.display = "block";
        questionContainer.style.display = "none";
        monitorContainer.innerHTML = "Wrong answer: slide down to tile 61";
        currentPosition = 61;

        var targetSvgPosition = document.getElementById(currentPosition);
        var targetDivPosition = getSvgCenter(targetSvgPosition);
        var deltaX = targetDivPosition.x - movingCenter.x;
        var deltaY = targetDivPosition.y - movingCenter.y;
        token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    }
  }

  myButton.addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    monitorContainer.innerHTML = "Dice number: " + randomNum;
    console.log("the roll dice result is: " + randomNum);
    currentPosition = currentPosition + randomNum;
    console.log("the current position is: " + currentPosition);
    if (currentPosition >= 100) {
      myButton.style.display = "none";
      currentPosition = 100;
      questionContainer.style.display = "none";
      restartButton.style.display = "block";
      monitorContainer.innerHTML =
        "Congratulations! You have successfully completed the game and demonstrated your knowledge and skills in identifying and responding to bullying behaviours. Well done!";
    }
    //for snakes and ladders
    checkForSpecialPosition(currentPosition);
    var targetSvgPosition = document.getElementById(currentPosition);
    var targetDivPosition = getSvgCenter(targetSvgPosition);
    var deltaX = targetDivPosition.x - movingCenter.x;
    var deltaY = targetDivPosition.y - movingCenter.y;
    token1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  function getSvgCenter(svg) {
    var rect = svg.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    return { x: centerX, y: centerY };
  }

  var movingRect = token1.getBoundingClientRect();
  var movingWidth = movingRect.width;
  var movingHeight = movingRect.height;
  var movingCenterX = movingRect.left + movingWidth / 2;
  var movingCenterY = movingRect.top + movingHeight / 1.5;
  var movingCenter = { x: movingCenterX, y: movingCenterY };

  restartButton.addEventListener("click", function () {
    location.reload();
  });
}, 15000);
