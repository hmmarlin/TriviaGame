// add array for images here
	// one array to capture clue images
	// one array to capture answer images

// create object of questions? 
var questions =[ 
	question1 = {
		'question': 'how many peas in a pod?',
		'a': '3 peas in a pod',
		'b': '1 peas in a pod',
		'c': '2 peas in a pod',
		'answer': 'a'
	},
	question2 = {
		'question': 'how many dogs in a pool?',
		'a': '3 dogs in a pool',
		'b': '1 dogs in a pool',
		'c': '2 dogs in a pool',
		'answer': 'c'
	},	
]

console.log(questions[1].question);

// global variables
var wins=0;
var losses=0;
var selection;

// stopwatch
var counter;

var stopwatch = {
    time: 10,
    reset: function () {
        stopwatch.time = 30;
        $('stopwatch').html('00:00')
    },


    start: function(){
        counter = setInterval(stopwatch.count, 1000)
        
    },
    stop: function(){
        clearInterval(counter);


    },

    count: function(){
        stopwatch.time--;
        var converted=stopwatch.timeConverter(stopwatch.time);
        $('#stopwatch').html(converted);
        if (stopwatch.time == 0) {
        	alert("time's up!");
        	stopwatch.stop();
        }
    },

    timeConverter: function(t){
        var seconds = t;
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        return '00' + ":" + seconds;
    }
};


// create function to start game on click of button
$('#start-button').on('click', displayQuestion);

function displayQuestion (){
  $('#button').hide();
  stopwatch.start();
  


  for (i=0; i<questions.length; i++){
  $('#question').html('<p>' + questions[i].question + '</p>');
  $('#answer-a').html('<button id = a>' + questions[i].a + '</button>');
  $('#answer-b').html('<button id = b>' + questions[i].b + '</button>');  
  $('#answer-c').html('<button id = c>' + questions[i].c + '</button>');

		if (questions[i].answer === selection){
					  		alert('great job!')
					  		wins++;
					  		stopwatch.reset();
					  	}

					  	else if (questions[i].answer !== selection){
					  		alert('loser!')
					  		losses--;
					  		stopwatch.reset();
					  	}
	

			}
	};

