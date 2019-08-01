
      let quotes = [
        (General = [
          [
            [
              "Two things are infinite",

              "the universe and human stupidity",

              "and I'm not sure about the universe",

              "The most beautiful experience we can have is the mysterious",

              "It is the fundamental emotion that stands at the cradle of true art and true science",

              "It is our choices",
              "Harry, that show what we truly are",
              "far more than our abilities",

              "All men who have turned out worth anything have had the chief hand in their own education",

              "Trust yourself.",
              "You know more than you think you do.",

              "No one can make you feel inferior without your consent."
            ],

            "Albert Einstein"
          ],

          [
            [
              "To be yourself in a world that is constantly",

              "trying to make you something else is the greatest accomplishment",

              "Twenty years from now you will be more disappointed by the things that you didn't do",

              "than by the ones you did do. So throw off the bowlines",

              "Sail away from the safe harbor",

              "Catch the trade winds in your sails. Explore. Dream. Discover",

              "Don't cry because it's over, smile because it happened",

              "You only live once, but if you do it right, once is enough",

              "To live is the rarest thing in the world. Most people exist, that is all",

              "It is better to be hated for what you are than to be loved for what you are not"
            ],

            "Ralph Waldo Emerson"
          ],

          [
            [
              "Two things are infinite",

              "the universe and human stupidity",

              "and I'm not sure about the universe",

              "The most beautiful experience we can have is the mysterious",

              "It is the fundamental emotion that stands at the cradle of true art and true science",

              "It is our choices",
              "Harry, that show what we truly are",
              "far more than our abilities",

              "All men who have turned out worth anything have had the chief hand in their own education",

              "Trust yourself.",
              "You know more than you think you do.",

              "No one can make you feel inferior without your consent."
            ],

            "Cory Booker"
          ],

          [
            [
              "To be yourself in a world that is constantly",

              "trying to make you something else is the greatest accomplishment",

              "Twenty years from now you will be more disappointed by the things that you didn't do",

              "than by the ones you did do. So throw off the bowlines",

              "Sail away from the safe harbor",

              "Catch the trade winds in your sails. Explore. Dream. Discover",

              "Don't cry because it's over, smile because it happened",

              "You only live once, but if you do it right, once is enough",

              "To live is the rarest thing in the world. Most people exist, that is all",

              "It is better to be hated for what you are than to be loved for what you are not"
            ],

            "Oscar Wilde"
          ],

          [
            [
              "Two things are infinite",

              "the universe and human stupidity",

              "and I'm not sure about the universe",

              "The most beautiful experience we can have is the mysterious",

              "It is the fundamental emotion that stands at the cradle of true art and true science",

              "It is our choices",
              "Harry, that show what we truly are",
              "far more than our abilities",

              "All men who have turned out worth anything have had the chief hand in their own education",

              "Trust yourself.",
              "You know more than you think you do.",

              "No one can make you feel inferior without your consent."
            ],

            "Mae West"
          ],

          [
            [
              "To be yourself in a world that is constantly",

              "trying to make you something else is the greatest accomplishment",

              "Twenty years from now you will be more disappointed by the things that you didn't do",

              "than by the ones you did do. So throw off the bowlines",

              "Sail away from the safe harbor",

              "Catch the trade winds in your sails. Explore. Dream. Discover",

              "Don't cry because it's over smile because it happened",

              "You only live once, but if you do it right once is enough",

              "To live is the rarest thing in the world. Most people exist, that is all",

              "It is better to be hated for what you are than to be loved for what you are not"
            ],

            "Dr. Seuss"
          ]
        ]),
        (Business = [
          [
            [
              "You have to be burning with an idea, or a problem",

              "or a wrong that you want to right. If you're not passionate enough from the start",

              "you'll never stick it out.",

              "Your work is going to fill a large part of your life,",

              "and the only way to be truly satisfied is to do what you believe is great work.",

              "And the only way to do great work is to love what you do.",

              "Design is not just what it looks like and feels like.",

              "Design is how it works.", 

              "Sometimes when you innovate",

              "you make mistakes",

              "It is best to admit them quickly",

              "and get on with improving your other innovations"
            ],

            "Steve Jobs"
          ],
          [
            [
              "Two things are infinite",

              "the universe and human stupidity",

              "and I'm not sure about the universe",

              "If you can’t feed a team with two pizzas,",

              "it’s too large.",

              "The best customer service is if the customer doesn’t need to call you",

              "doesn’t need to talk to you",

              "It just works",

              "If you don’t understand the details of your business you are going to fail",

              "There are two kinds of companies",

              "those that work to try to charge more and those that work to charge less",

              "We will be the second",

              "We expect all our businesses to have a positive impact on our top and bottom lines",

              "Profitability is very important to us or we wouldn’t be in this business",

              "We see our customers as invited guests to a party",

              "and we are the hosts",
            ],

            "Jeff Bezos"
          ],
          [
            [
              "Don’t compare yourself with anyone in this world",
              "if you do so",
              "If you think your teacher is tough",
              "wait till you get a boss",
              "I choose a lazy person to do a hard job",
              "Because a lazy person will find an easy way to do it",
              "To win big",
              "you sometimes have to take big risks",
              "It’s fine to celebrate success",
              "but it is more important to heed the lessons of failure",
              "Patience is a key element of success",
              "Life is not fair",
              "get used to it",
              "Be nice to nerds",
              "Chances are you’ll end up working for one",
              "Your most unhappy customers are your greatest source of learning",
              "Don’t compare yourself with anyone in this world",
              "if you do so, you are insulting yourself"
            ],

            "Bill Gates"
          ],
          [
            [
              "I think a simple rule of business is",

              "if you do the things that are easier first",

              "then you can actually make a lot of progress",

              "In terms of doing work and in terms of learning and evolving as a person",

              "you just grow more when you get more people’s perspectives",

              "I really try and live the mission of the company and",

              "keep everything else in my life extremely simple",

              "Nothing influences people more than a recommendation from a trusted friend",

              "By giving people the power to share",

              "we’re making the world more transparent",

              "Facebook was not originally created to be a company",

              "It was built to accomplish a social mission",

              "to make the world more open and connected"
            ],

            "Mark Zuckerberg"
          ]
        ])
      ];

      //access to DOM elements
      const quotesContainer = document.querySelector("#quotes-container");
      const generalQuoteButton = document.querySelector("#generalQuote");
      const businessQuoteButton = document.querySelector("#businessQuote");
      const generateBtns = document.querySelectorAll(".quote-btn");

      //generate a random number to be used to get the quotes from array
      const genRandomNumber = quotes => {
        return Math.floor(Math.random() * quotes.length);
      };

      // Get the number of quotes to be generated
      const getQuoteNumber = () => {
        const quoteOptions = document.querySelector("#quoteNumber").value;

        return quoteOptions;
      };

      //Generate quotes based on the button that was clicked
      const generateQuote = (type, number) => {
        // Empty before adding new quotes
        quotesContainer.innerHTML = "";

        if (type == "General") {
          for (let i = 0; i < number; i++) {
            let getRandomQuote = genRandomNumber(quotes[0]);

            let getQuote = quotes[0][getRandomQuote][0];

            let authorText = quotes[0][getRandomQuote][1];

            let quoteText = generatedQuote(getQuote);

            displayQuote(quoteText, authorText);
          }
        } else if (type == "Business") {
          for (let i = 0; i < number; i++) {
            let getRandomQuote = genRandomNumber(quotes[1]);

            let getQuote = quotes[1][getRandomQuote][0];

            let authorText = quotes[1][getRandomQuote][1];

            let currentIndex;

            let quoteText = generatedQuote(getQuote);

            displayQuote(quoteText, authorText);
          }
        }
      };

      // combine the Begining, middel and ending quotes
      let generatedQuote = quote => {
        let beginIndex;

        let middleIndex;

        // first part of the quote
        const begin = function(quote) {
          let randomNumber = genRandomNumber(quote);

          // console.log(randomNumber);

          if (randomNumber != beginIndex) {
            beginIndex = randomNumber;

            let newQuote = quote[randomNumber];

            if (typeof newQuote !== "undefined") {
              return newQuote;
            } else {
              begin(quote);
            }
          } else {
            begin(quote);
          }
        };

        // second part of the quote
        const middle = function(quote) {
          let randomNumber = genRandomNumber(quote);

          // console.log(randomNumber);

          if (randomNumber != beginIndex) {
            middleIndex = randomNumber;

            let newQuote = quote[randomNumber];

            if (typeof newQuote !== "undefined") {
              return newQuote;
            } else {
              middle(quote);
            }
          } else {
            middle(quote);
          }
        };

        // last part of the quote
        const end = function(quote) {
          let randomNumber = genRandomNumber(quote);

          // console.log(randomNumber);

          if (randomNumber != beginIndex || middleIndex) {
            // currentIndex = randomNumber;

            let newQuote = quote[randomNumber];

            if (typeof newQuote !== "undefined") {
              return newQuote;
            } else {
              end(quote);
            }
          } else {
            end(quote);
          }
        };

        return `${begin(quote)} ${middle(quote)} ${end(quote)}.`;
      };

      //Create the elements to display the the quotes generated
      const displayQuote = (selectedQuote, selectedAuthor) => {
        let quoteElem = document.createElement("h5");

        let authorElem = document.createElement("p");

        quoteElem.innerHTML = selectedQuote;

        authorElem.innerHTML = selectedAuthor;

        quotesContainer.appendChild(quoteElem);

        quotesContainer.appendChild(authorElem);
      };

      //Add EventListener to the buttons
      generateBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
          generateQuote(btn.getAttribute("data-value"), getQuoteNumber());
        });
      });

      window.onload = function() {
        generateQuote("General", getQuoteNumber())
      };
    