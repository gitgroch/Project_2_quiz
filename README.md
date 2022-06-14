<!-- Insert Mobile responsiveness picture here -->

# **Sci-Fi Movie Quiz**

![screenshot of site from https://ui.dev/amiresponsive.](/assets/docs/screenshots/rm_amiresponsive.jpg)


## **Overview**

Sci-Fi moview quiz is a website for people to test their sci-fi movie knowledge. 

The website can be accessed here: https://gitgroch.github.io/Project_2_quiz/

Target Audience:

- Fans of sci-fi movies 
- Fans of movie quizes 

User Stories:

- As a fan of sci-fi movies I'd like a fun way to test my knowledge about them 
- I'd like to see how I score against the quiz and benchmark my performance against other users. 

The purpose of the website is to provide the above target users with:

- A place to test their movie knowledge 
- A leaderboard to show off their score and compete against other users. 

The development Goals for the Website were to:

-   Create a website that has a "Sci-Fi aesthetic" - ACHIEVED 
-   Create amn easy to use Quiz to test the users knowledge - ACHIEVED
-   Provide the user the option to save their score to a leaderboard - ACHIEVED 

## **Planning** 

I discovered early on this project had many moving parts that became difficult to track, I decided to use Trello to track the tasks that I neeeded to complete

![Screenshots of Trello board used for the project](/assets/docs/screenshots/rm_trello.jpg)

### **WireFraming** 

I used Balsamiq to roughly plan out some of the initial features and layout of the pages. Desktop and Mobile versions were wireframed side by side which helped me to decide early on how I wanted to approach responsiveness. On the whole, there are many parts of the final design that departs significantly from the wireframes, but the structure is similar.


![Screenshots of initial wireframe designs made with balsamiq](/assets/docs/screenshots/rm_wireframe_1.jpg)
![Screenshots of initial wireframe designs made with balsamiq](/assets/docs/screenshots/rm_wireframe_2.jpg)
![Screenshots of initial wireframe designs made with balsamiq](/assets/docs/screenshots/rm_wireframe_3.jpg)




### **Color Schemes** 

I looked for a color scheme that would be consistent with a Sci-Fi movie poster or book cover. 

I used the tool [coolors.co](https://coolors.co) to generate several color schemes until I arrived at something that met my criteria: 

![screenshot of chosen color scheme](/assets/docs/screenshots/rm_coolors.jpg)


### **Typography**

I looked for fonts that again would be consistent with a Sci-Fi movie poster or book cover. 
**Fonts:**
- For Headers: [Unica One](https://fonts.google.com/specimen/Unica+One?query=unica+one)
- For Body text: [Comfortaa](https://fonts.google.com/specimen/Comfortaa?query=comfortaa)
- Backup font: Sans Serif

The fonts are sourced from Google fonts.




# **Features**

## **Home Page** 

![screenshot of home page](/assets/docs/screenshots/rm_homepage.jpg)

-   Welcome Note 
    -   The Welcome note describes the purpose of the site and gives the user an idea of wat to expect 

- Buttons 
    - The buttons are clearly defined and highlight their function 
    - From here the user can either go straight to the Quiz or view previously saved high scores 


## **Quiz Page** 

![screenshot of the quiz page ](/assets/docs/screenshots/rm_quiz_page.jpg)

![screenshot of the progress section ](/assets/docs/screenshots/rm_progress.jpg)

- Progress Section 
    - This will display the qustion the user is on as well as provide a visual que as to how far along they are with the progress bar. The progress bar and question counter increases each time the user taps the next button 

![screenshot of the progress section ](/assets/docs/screenshots/rm_score.jpg)
- Score Section 
    - This section shows the users current score. 
    - Every time the user answers correctly the score will increment by 1. 

![screenshot of the question section ](/assets/docs/screenshots/rm_question.jpg)
- Question Section 
    - This section displays the question for the user and also gives a satisfying visual with a picture that is relevant to the question or answer. Each question has it's own uniuqe picture 

![screenshot of the quiz buttons ](/assets/docs/screenshots/rm_buttons.jpg)

- Answer Buttons 
    - For each question the user is presented with 4 possible answers in the forms of buttons. The user can select their answer by tapping on it. 
    - Regardless of which button is tapped, the color of all the buttons will change. The correct answer button will turn green and the incorrect answers will turn red. This will validate to the user if their choice was correct. 

- Next button 
    - Once the user answers the question, the "next button" will appear to prompt the user to move to the next question. 
    - Allowing the user to choose when to progress, rather than doing it automatically allows them to review the answers. 


## **End Page**

![screenshot of the end page](/assets/docs/screenshots/rm_endpage.jpg)

- The end page appears once the user has answered all 10 questions in the quiz 
The end page allows the user to:  
    - See their score from this round of the quiz
    - Enter their name in the box provided
    - Save their name and score to the leader board by clicking the save button 
    - Go to the high scores page to review the leader board.
    - Go straight back into the quiz by clicking try again 
    - Go back to the home page (more useful once difficulty settings are implemented)
    

## **High Score Page**

![screenshot of the high scores page](/assets/docs/screenshots/rm_leaderboard.jpg)

- The high scores page is accessible via the button on the home page or the end page 
- The leaderboard shows the name and score of the users who have acheived the highest score on the quiz 
- The user can go back to the home page by clicking the go home button


## **Testing:**

A seperate document has been created to detail Testing, Validation, Bugs and Fixes, which can be forund [here](/TESTLOG.md).

- [TESTLOG](/TESTLOG.md)

## **Future Enhancement**

- Improve performance on mobile devices 
- Add Multiple difficulty settings 
- Add many more questions, but keep the max question count to 10. Cycle through the questions randomly to increase re-playability 
- Add custom message based on score. 
- Add functionality to share score 
- Add persistant scoreboard (rather than local storage)

## **Deployment** 

The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://gitgroch.github.io/Project_2_quiz/

## **Credits & Acknowledgements** 

### Tutorials 

The below tutorials by Brian Design and Web Dev Simplified are the main inspiration and source of information for my JavaScript Code. As the application is relatively simple, some of the code is used almost verbatim from these tutorials. I have tried to use notation to display how it fits into my application.

- [How to Make a Quiz App using HTML CSS Javascript by Brian Design ](https://youtu.be/f4fB9Xg2JEY)
- [Build A Quiz App With JavaScript By Web Dev Simplified](https://youtu.be/riDzcEQbX6k)

### Other References
- [Building a Multiple Choice Quiz by Mike Dane](https://www.youtube.com/watch?v=LQGTb112N_c&t=10s&ab_channel=MikeDane)
- [How to Add Overlay to Background Image Using CSS By Roshan Parihar](https://tutorialdeep.com/knowhow/add-overlay-background-image-css/)
- [How to have images in a JavaScript quiz? Answer by zcoop98 at StackOverflow](https://stackoverflow.com/questions/64563792/how-to-have-images-in-a-javascript-quiz)

### Media & Content
- Background Picture: [WallPaper Safari](https://wallpapersafari.com/w/9lejQ4)
- Button Design [Alpine Day via getcssscan.com](https://getcssscan.com/css-buttons-examples)
- Quiz Images were sourced from google photo search and retain the copyright of their owners. 
