var fuzzyTime = function(timeString) {
	function getFuzzyTime(timeString) {
		var time = getTimeObject(timeString);

		if (time.minute === 0) {
			if (time.hour === 12) {
				return "noon";
			}
			if (time.hour === 24) {
				return "midnight";
			}
			return numberToString(time.hour) + " o'clock";	
		} else {
			return numberToString(time.minute) + ' past ' + numberToString(time.hour);	
		}
	}

	function getTimeObject(timeString) {
		var split = timeString.split(':');
		return {
			hour: parseInt(split[0]),
			minute: roundToNearestFive(split[1])
		};
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
			11: 'eleven'
		};
		return numbers[number];
	}

	function roundToNearestFive(number) {
		return 5 * Math.round(parseInt(number) / 5);
	}

	return getFuzzyTime(timeString);
};

module.exports = fuzzyTime;
