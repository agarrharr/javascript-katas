var fuzzyTime = function(timeString) {
	function getFuzzyTime(timeString) {
		var time = getTimeObject(timeString);

		if (time.minute === 0) {
			return getTimeOnTheHour(time);
		} else {
			if (time.minute > 35) {
				return getTimeAfterTheHour(time);
			}
			return getTimeBeforeTheHour(time);
		}
	}

	function getTimeOnTheHour(time) {
		if (time.hour === 12) {
			return "noon";
		}
		if (time.hour === 24) {
			return "midnight";
		}
		return numberToString(time.hour) + " o'clock";	
	}

	function getTimeAfterTheHour(time) {
		return numberToString(invertMinute(time.minute)) + ' till ' + numberToString(time.hour);	
	}

	function getTimeBeforeTheHour(time) {
		return numberToString(time.minute) + ' past ' + numberToString(time.hour);	
	}

	function getTimeObject(timeString) {
		var split = timeString.split(':');
		var timeObject = {
			hour: parseInt(split[0]),
			minute: roundToNearestFive(split[1])
		};
		if (timeObject.minute === 60 ) {
			timeObject.hour += 1;
			timeObject.minute = 0;
		}
		return timeObject;
	}

	function numberToString(number) {
		var numbers = {
			1: 'one',
			2: 'two',
			3: 'three',
			4: 'four',
			5: 'five',
			6: 'six',
			7: 'seven',
			8: 'eight',
			9: 'nine',
			10: 'ten',
			11: 'eleven',
			15: 'quarter',
			20: 'twenty',
			25: 'twenty-five',
			30: 'half',
			35: 'thirty-five'
		};
		return numbers[number];
	}

	function invertMinute(minute) {
		return 60 - minute;
	}

	function roundToNearestFive(numberString) {
		var number = parseInt(numberString);
		return 5 * Math.round(number / 5);
	}

	return getFuzzyTime(timeString);
};

module.exports = fuzzyTime;
