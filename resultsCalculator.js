function getResults(answers) {
	// console.log('answers');
	// console.log(answers);
	var ans = answers.answers;
			template = [
			  {
			    "question": 1,
			    "answer": 3
			  },
			  {
			    "question": 2,
			    "answer": 2
			  },
			  {
			    "question": 3,
			    "answer": 3
			  },
			  {
			    "question": 4,
			    "answer": 3
			  },
			  {
			    "question": 5,
			    "answer": 4
			  }
			],
			results = {
				'correctAnswers': 0,
				'wrongAnswers': {
					'list': [],
					'total': 0
				},
				'notAnswered': {
					'list': [],
					'total': 0
				},
				'nullAnswers': {
					'list': [],
					'total': 0
				}
			};

	// console.log(ans);

	ans.forEach(function (answer, index) {
		// 5 - no contestada
		// 6 - respuesta anulada
		// console.log(answer);
		var templateItem = getTemplateItem(parseInt(answer.question, 10), template),
				wrongAnswer = {
					'question': index + 1,
					'myAnswer': 0,
					'correctAnswer': 0
				},
				notAnsweredQuestion = {
					'question': index + 1,
					'correctAnswer': 0
				};

		console.log(templateItem);
		if (parseInt(answer.answer, 10) === templateItem.answer) results.correctAnswers++;
		else {
			if (templateItem.answer === 6) {
				results.nullAnswers.list.push(templateItem.question);
				results.nullAnswers.total++;
			} else if (parseInt(answer.answer, 10) === 5) {
				results.notAnswered.total++;
				notAnsweredQuestion.correctAnswer = templateItem.answer;
				results.notAnswered.list.push(notAnsweredQuestion);
			}
			else {
				wrongAnswer.myAnswer = parseInt(answer.answer, 10);
				wrongAnswer.correctAnswer = templateItem.answer;
				results.wrongAnswers.total++;
				results.wrongAnswers.list.push(wrongAnswer);
			}
		}
	});

	return results;
}

function getTemplateItem(questionNumber, template) {
	var templateItem;

	template.forEach(function (item) {
		// console.log(item);		
		// console.log(questionNumber);
		// console.log(item.question === parseInt(questionNumber, 10));
		if (item.question === questionNumber) templateItem = item;
	});
	// console.log(templateItem);
	return templateItem;
}

module.exports = getResults;