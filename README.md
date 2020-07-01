# Quiz-App
Thinkful Quiz App
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barbecue Quiz</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class ="container">
      <div id="home" class= "flex-center flex-column"> 
    <h1>Welcome to the Barbecue Quiz!!!</h1>
        <button><a href="bbq.html" id="goToBBQ">Let's Get Started</a></button>

        
    </div>   
    </div> 
</body>
</html>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Barbecue Quiz</title>
    <link rel="stylesheet" href="bbq.css" />
  </head>

  <body>
    <div class="container">
      <div id="quiz" class="justify-center flex-column">
        <h2 id="question">How old is the art of barbecue?</h2>
      </div>
      <div>
        <form>
          <div>
            <input type="radio" name="choice" value="a" /><label
              >a. created during the 1950's
            </label>
          </div>
          <div>
            <input type="radio" name="choice" value="b" />
            <label>b. Invented by Abraham Lincoln in 1830</label>
          </div>
          <div>
            <input type="radio" name="choice" value="c" />
            <label
              >c. Has been around ever since meat was cooked over an open flame
            </label>
          </div>
          <div>
            <input type="radio" name="choice" value="d" /><label>
              d. Since Julius Caesar wanted more substance to go with his salad
            </label>
          </div>
        </form>

        <button>Submit answer</button>
      </div>
    </div>
  </body>
</html>

.container {
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    justify-items: center;
    align-items:center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: left;

}

#radio {
    /* display: flex;
    flex-direction: column; */

}

#value {
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
}

button {
    display: flex;
    flex-direction: column;
    align-items: center;

    
}

#input {
    /* display:flex; */
    /* flex-direction: row; */
}
