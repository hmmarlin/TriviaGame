 $(document).ready(function() {
    $("#score").hide();


     // create object of questions:
     var questions = [{
         'question': 'What is Jay Z\'s real name?',
         'a': 'Michael Knowles',
         'b': 'Jeremy Johnson',
         'c': 'Shawn Carter',
         'answer': 'c',
         'img': 'http://media.giphy.com/media/xT8qBmLfZXBDPBP29O/giphy.gif'
     }, {
         'question': 'What is Eminem\'s real name?',
         'a': 'Marshall Mathers',
         'b': 'Jimmy Smith, Jr.',
         'c': 'B. Rabbit',
         'answer': 'a',
         'img': 'http://media.giphy.com/media/12jcwKEZNh4GSQ/giphy.gif'

     }, {
         'question': 'What is Drake\'s real name?',
         'a': 'Aubrey Graham',
         'b': 'Dennis Jones',
         'c': 'Wayne Jenkins',
         'answer': 'a',
         'img': 'http://media.giphy.com/media/3o85xKWHrNvXqAvWMM/giphy.gif'
     }, {
         'question': 'What is Nicki Minaj\'s real name?',
         'a': 'Nicolette Moore',
         'b': 'Onika Maraj',
         'c': 'Nicole Majors',
         'answer': 'b',
         'img': 'http://media.giphy.com/media/yliFuJ98lafBe/giphy.gif'
     }, {
         'question': 'What is Dr. Dre\'s real name?',
         'a': 'Andre Young',
         'b': 'Warren Greene',
         'c': 'Marcel Roberts',
         'answer': 'a',
         'img': 'http://media.giphy.com/media/oL3v6WK8vVUac/giphy.gif'
     }, {
         'question': 'What is Da Brat\'s real name?',
         'a': 'Ciara Wilson',
         'b': 'Warren Greene',
         'c': 'Shawntae Harris',
         'answer': 'c',
         'img': 'http://media.giphy.com/media/BRHJlhQStZ01q/giphy.gif'
     }]


     // global variables
     var wins = 0;
     var losses = 0;
     var selection;
     var i = 0;
     var imgVal;

     // stopwatch
     var counter;

     var stopwatch = {
         time: 16,
         reset: function() {
             stopwatch.stop();
             stopwatch.time = 16;

             //$('stopwatch').html('00:00')
             displayQuestion();
         },


         start: function() {
             counter = setInterval(stopwatch.count, 1000)

         },
         stop: function() {
             clearInterval(counter);


         },

         count: function() {
             stopwatch.time--;
             var converted = stopwatch.timeConverter(stopwatch.time);
             $('#stopwatch').html(converted);
             if (stopwatch.time == 0) {
                 // alert("time's up!");
                 stopwatch.reset();

             }
         },

         timeConverter: function(t) {
             var seconds = t;
             if (seconds < 10) {
                 seconds = "0" + seconds;
             }
             return '00' + ":" + seconds;
         }
     };



     // create function to start game on click of button
     $('#start-button').on('click', displayQuestion);

     // create function to restart the game @ end on click of restart button
     function restartGame() {
         $('h3').show();
         $('#loss').html('');
         $('#wins').html('');
         $('#answers').html('');
         $('#start-button').show();
         $("#game-over").html('')
         console.log(questions.length);
         wins = 0;
         losses = 0;
         i = (i - questions.length);


     };

     // at the end of the game, instead of displaying a new question, display results. 
     function dispalyResults() {
         $('#question').html('');
         $('#a').html('');
         $('#b').html('');
         $('#c').html('');
         stopwatch.stop();
         $("#game-over").html('Game Over!');
         $('#answers').append('<p>' + '<img src=' + 'http://media2.popsugar-assets.com/files/thumbor/vwXZq0YrIvHoQz9Tq0I2gfN8MUY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/03/787/n/1922398/0dc7867952fbc808_beyonce-gif/i/Beyonce-Dancing-GIFs.gif' + '>' + '</p>')
         $('#answers').append('<button class=restart> Play Again</button>');
         $('.restart').on('click', restartGame);



     }


     // function to display all of my questions, in a for loop to loop thru the array of questions & options:

     function displayQuestion() {
         $('#start-button').hide();
         $('h3').hide();
         stopwatch.start();
         $("#score").show();

         // to end the question asking:
         if (i >= questions.length) {
             dispalyResults();
         } else {

             $('#question').html('<p>' + questions[i].question + '</p>');
             $('#a').html('<button class="btn" id = a> a ' + '</button>' + questions[i].a);
             $('#b').html('<button class="btn" id = b> b ' + '</button>' + questions[i].b)
             $('#c').html('<button class="btn" id = c> c ' + '</button>' + questions[i].c);
             $(".btn").click(function() {
                 selection = this.id;

                 if (questions[i - 1].answer === selection) {
                     wins++;
                     stopwatch.reset();
                     // $('#image-result').html('<img src=' + questions[i-1].img + '>')
                     $('#wins').html('Wins: ' + wins);




                 } else if (questions[i - 1].answer !== selection) {
                     losses++;
                     $('#loss').html('Losses: ' + losses);
                      // $('#image-result').html('<img src=' + questions[i-1].img + '>')
                     stopwatch.reset();

                 }

             })

             i++;
         }
     }
     //display wins & losses 


 });
