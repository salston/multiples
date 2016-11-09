//global variables
		var i;
		var testNumbers = new Array();
		var correctNumbers = new Array();

		function startup()
		{
			// set initial visiblity of div's
			document.getElementById('setupDiv').style.visibility = 'visible';
			document.getElementById('numText').style.visibility = 'hidden';
			document.getElementById('yesButton').style.visibility = 'hidden';
			document.getElementById('noButton').style.visibility = 'hidden';
		}

		function setNumbers()
		{
			var first = document.getElementById("firstNumber").value;
			var last = document.getElementById("lastNumber").value

			if (first >= last)
			{
				document.getElementById("setupWarning").innerHTML="Start has to be lower than Last";
			}
			else
			{
				for (i=first;i<=last;i++)
				{
					testNumbers.push(i);
				}
				// Change visibility of divs
				document.getElementById('setupDiv').style.visibility = 'hidden';
				document.getElementById('numText').style.visibility = 'visible';
				document.getElementById('yesButton').style.visibility = 'visible';
				document.getElementById('noButton').style.visibility = 'visible';
				//set first number
				document.getElementById("bigNumber").innerHTML=randomNumber();
			};
		}

		function randomNumber()
		{
			var randomnumber=Math.floor(Math.random() * testNumbers.length);
			return testNumbers[randomnumber];
		}


		function correct()
		{
			// remove correct answer from testNumbers
			testNumbers.splice(testNumbers.indexOf(document.getElementById("bigNumber").innerHTML),1);
			if (testNumbers.length == 0)
			{
				// done
				document.getElementById("bigNumber").innerHTML="Yeah, you did it!";
			}
			else
			{
				// get another number
				document.getElementById("bigNumber").innerHTML=randomNumber();
			}
		}

		function incorrect()
		{
			document.getElementById("bigNumber").innerHTML=randomNumber();
		}