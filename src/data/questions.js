const questions = [
	{
		id: 1,
		title: 'What is React?',
		answers: [
			{ answerText: 'A back-end framework' },
			{ answerText: 'A front-end library' },
			{ answerText: 'A database management system' },
			{ answerText: 'A programming language' },
		],
		isCorrect: 2,
		categorie: 1,
	},
	{
		id: 2,
		title: 'What is the latest version of React?',
		answers: [
			{ answerText: '16.8' },
			{ answerText: '17.0' },
			{ answerText: '18.0' },
			{ answerText: '19.0' },
		],
		isCorrect: 2,
		categorie: 1,
	},
	{
		id: 2,
		title: 'What is React used for?',
		answers: [
			{ answerText: 'Building back-end servers' },
			{ answerText: 'Creating mobile applications' },
			{ answerText: 'Developing front-end user interfaces' },
			{ answerText: 'Analyzing data' },
		],
		isCorrect: 3,
		categorie: 1,
	},

	{
		id: 3,
		title: 'What is JSX?',
		answers: [
			{ answerText: 'A new JavaScript syntax for working with objects' },
			{ answerText: 'A data storage format for JSON' },
			{ answerText: 'A way of writing HTML-like code in JavaScript' },
			{ answerText: 'A method of compressing files for faster loading times' },
		],
		isCorrect: 3,
		categorie: 1,
	},

	{
		id: 4,
		title: 'What is the Virtual DOM in React?',
		answers: [
			{ answerText: 'A way of rendering HTML without using the actual DOM' },
			{ answerText: 'A type of machine learning algorithm' },
			{ answerText: 'A tool for analyzing website traffic' },
			{ answerText: 'A technique for storing data in memory' },
		],
		isCorrect: 1,
		categorie: 1,
	},
	{
		id: 5,
		title: 'What is the difference between props and state in React?',
		answers: [
			{ answerText: 'Props are immutable, while state can be changed' },
			{
				answerText:
					'State is passed down from parent components, while props are set internally',
			},
			{
				answerText:
					'Props can only be used in functional components, while state is only for class components',
			},
			{ answerText: 'There is no difference between props and state in React' },
		],
		isCorrect: 1,
		categorie: 1,
	},

	{
		id: 6,
		title: 'What is the purpose of the useEffect hook in React?',
		answers: [
			{ answerText: 'To create reusable components' },
			{ answerText: 'To handle form submissions' },
			{ answerText: 'To perform side effects in functional components' },
			{ answerText: 'To manage state in class components' },
		],
		isCorrect: 3,
		categorie: 1,
	},

	{
		id: 7,
		title: 'What is a higher-order component in React?',
		answers: [
			{ answerText: 'A function that returns a React component' },
			{ answerText: 'A component that renders other components' },
			{
				answerText:
					'A type of component that can be reused across multiple projects',
			},
			{
				answerText:
					'A component that can only be used once in a React application',
			},
		],
		isCorrect: 1,
		categorie: 1,
	},

	{
		id: 8,
		title: 'What is the purpose of the Redux library in React?',
		answers: [
			{ answerText: 'To manage the routing of a React application' },
			{ answerText: 'To handle form validation' },
			{ answerText: 'To simplify the management of application state' },
			{ answerText: 'To provide a database management system for React' },
		],
		isCorrect: 3,
		categorie: 1,
	},

	{
		id: 9,
		title: 'What is a React component?',
		answers: [
			{ answerText: 'A class that inherits from the React Component class' },
			{ answerText: 'A function that returns JSX' },
			{ answerText: 'An object that contains both state and props' },
			{ answerText: 'A data structure used to store user input' },
		],
		isCorrect: 2,
		categorie: 1,
	},

	{
		id: 10,
		title:
			'What is the difference between a controlled and uncontrolled component in React?',
		answers: [
			{
				answerText:
					'A controlled component uses props to control its value, while an uncontrolled component uses state',
			},
			{
				answerText:
					'An uncontrolled component is a type of higher-order component, while a controlled component is not',
			},
			{
				answerText:
					'A controlled component can only be used once in a React application, while an uncontrolled component can be used multiple times',
			},
			{
				answerText:
					'There is no difference between a controlled and uncontrolled component in React',
			},
		],
		isCorrect: 1,
		categorie: 1,
	},
	{
		id: 3,
		title: 'What is JS',
		answers: [
			{ answerText: 'A templating language' },
			{ answerText: 'A programming language' },
			{ answerText: 'A syntax extension to JavaScript' },
			{ answerText: 'A library for managing state' },
		],
		isCorrect: 1,
		categorie: 2,
	},
	{
		id: 4,
		title: 'What is the  DOM in JS?',
		answers: [
			{ answerText: 'A real-time database' },
			{ answerText: 'A data structure used by React' },
			{ answerText: 'A programming paradigm' },
			{
				answerText: 'A way to interact with the browser DOM',
			},
		],
		isCorrect: 1,
		categorie: 2,
	},
	{
		id: 5,
		title: 'What is the HTML/CSS?',
		answers: [
			{ answerText: 'State is immutable, props are mutable' },
			{ answerText: 'State is mutable, props are immutable' },
			{
				answerText:
					'State is private to the component, props are passed from parent to child',
			},
			{
				answerText:
					'State is passed from parent to child, props are private to the component',
			},
		],
		isCorrect: 1,
		categorie: 3,
	},
	{
		id: 6,
		title:
			'What is the purpose of the componentDidMount() lifecycle method in React?',
		answers: [
			{ answerText: 'To update the component' },
			{
				answerText: 'To set the initial state of the component',
			},
			{ answerText: 'To fetch data from an API' },
			{ answerText: 'To handle user input events' },
		],
		isCorrect: 1,
		categorie: 3,
	},
	/* {
		id: 7,
		title:
			'What is the purpose of the shouldComponentUpdate() lifecycle method in React?',
		answers: [
			{ answerText: 'To render the component' },
			{ answerText: 'To update the component' },
			{
				answerText: 'To check if the component should re-render',
			},
			{ answerText: 'To fetch data from an API' },
		],
		isCorrect: 1,
	}, */
];

export default questions;
