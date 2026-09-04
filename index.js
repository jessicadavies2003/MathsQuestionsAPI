import express from "express"

// data to receive.
const data = {
    "arithmetic": {
        "q1": {
            "question": "What is 100/25?",
            "options": ["3", "4", "5", "6", "7"],
            "correctIndex": 1
        },
        "q2": {
            "question": "What is 7 x 8?",
            "options": ["48", "54", "56", "64", "72"],
            "correctIndex": 2
        },
        "q3": {
            "question": "What is 15 + 27?",
            "options": ["32", "38", "40", "42", "44"],
            "correctIndex": 3
        },
        "q4": {
            "question": "What is 81 - 29?",
            "options": ["42", "48", "50", "52", "58"],
            "correctIndex": 2
        },
        "q5": {
            "question": "What is 12 x 6?",
            "options": ["60", "66", "70", "72", "78"],
            "correctIndex": 3
        },
        "q6": {
            "question": "What is 125 / 5?",
            "options": ["20", "22", "24", "25", "30"],
            "correctIndex": 3
        },
        "q7": {
            "question": "What is 9 + 14 - 3?",
            "options": ["18", "19", "20", "21", "22"],
            "correctIndex": 2
        },
        "q8": {
            "question": "What is 24 / 3 + 4?",
            "options": ["8", "10", "12", "14", "16"],
            "correctIndex": 1
        },
        "q9": {
            "question": "What is 18 x 4?",
            "options": ["62", "68", "70", "72", "76"],
            "correctIndex": 3
        },
        "q10": {
            "question": "What is 33 + 17?",
            "options": ["44", "46", "48", "50", "52"],
            "correctIndex": 3
        }
    },
    "algebra": {
        "q1": {
            "question": "Find the value of X: '2x = 16'",
            "options": ["4", "6", "8", "10", "12"],
            "correctIndex": 2
        },
        "q2": {
            "question": "Find the value of X: 'x + 5 = 12'",
            "options": ["5", "6", "7", "8", "9"],
            "correctIndex": 3
        },
        "q3": {
            "question": "Find the value of X: 'x - 4 = 9'",
            "options": ["11", "12", "13", "14", "15"],
            "correctIndex": 2
        },
        "q4": {
            "question": "Find the value of X: '3x = 21'",
            "options": ["5", "6", "7", "8", "9"],
            "correctIndex": 2
        },
        "q5": {
            "question": "Find the value of X: 'x/2 = 9'",
            "options": ["16", "17", "18", "19", "20"],
            "correctIndex": 2
        },
        "q6": {
            "question": "Find x: 'x + 8 = 20'",
            "options": ["10", "11", "12", "13", "14"],
            "correctIndex": 2
        },
        "q7": {
            "question": "Find the value of X: '5x = 40'",
            "options": ["6", "7", "8", "9", "10"],
            "correctIndex": 2
        },
        "q8": {
            "question": "Find x: 'x - 7 = 3'",
            "options": ["8", "9", "10", "11", "12"],
            "correctIndex": 3
        },
        "q9": {
            "question": "Find the value of X: '2x + 4 = 16'",
            "options": ["4", "5", "6", "7", "8"],
            "correctIndex": 3
        },
        "q10": {
            "question": "Find the value of X: 'x/3 = 6'",
            "options": ["15", "16", "17", "18", "19"],
            "correctIndex": 3
        }
    },
    "geometry": {
        "q1": {
            "question": "What is the area of a rectangle with length 8 and width 5?",
            "options": ["13", "26", "35", "40", "45"],
            "correctIndex": 3
        },
        "q2": {
            "question": "How many sides does a hexagon have?",
            "options": ["5", "6", "7", "8", "9"],
            "correctIndex": 1
        },
        "q3": {
            "question": "What is the perimeter of a square with side 6?",
            "options": ["18", "20", "24", "28", "30"],
            "correctIndex": 2
        },
        "q4": {
            "question": "How many degrees are in a triangle?",
            "options": ["90", "180", "270", "360", "450"],
            "correctIndex": 1
        },
        "q5": {
            "question": "What is the area of a triangle with base 10 and height 6?",
            "options": ["20", "28", "30", "36", "60"],
            "correctIndex": 2
        },
        "q6": {
            "question": "How many sides does an octagon have?",
            "options": ["6", "7", "8", "9", "10"],
            "correctIndex": 2
        },
        "q7": {
            "question": "What is the circumference formula for a circle?",
            "options": ["πr²", "2πr", "πd²", "2r²", "r + d"],
            "correctIndex": 1
        },
        "q8": {
            "question": "What is the area of a square with side 9?",
            "options": ["27", "36", "45", "63", "81"],
            "correctIndex": 4
        },
        "q9": {
            "question": "How many edges does a cube have?",
            "options": ["8", "10", "12", "14", "16"],
            "correctIndex": 2
        },
        "q10": {
            "question": "What is the area of a rectangle with length 12 and width 3?",
            "options": ["18", "24", "30", "32", "36"],
            "correctIndex": 4
        }
    },
    "statistics": {
        "q1": {
            "question": "What is the median of 3, 7, 9, 11, 15?",
            "options": ["7", "9", "10", "11", "15"],
            "correctIndex": 1
        },
        "q2": {
            "question": "What is the mean of 2, 4, 6, 8?",
            "options": ["4", "5", "6", "7", "8"],
            "correctIndex": 0
        },
        "q3": {
            "question": "What is the mode of 2, 3, 3, 5, 7, 3?",
            "options": ["2", "3", "5", "7", "None"],
            "correctIndex": 1
        },
        "q4": {
            "question": "What is the range of 4, 8, 10, 15, 19?",
            "options": ["10", "11", "12", "14", "15"],
            "correctIndex": 3
        },
        "q5": {
            "question": "What is the median of 5, 9, 11, 13, 17, 19?",
            "options": ["11", "12", "13", "14", "15"],
            "correctIndex": 2
        },
        "q6": {
            "question": "What is the mean of 10, 20, 30, 40?",
            "options": ["20", "22", "25", "30", "40"],
            "correctIndex": 2
        },
        "q7": {
            "question": "What is the mode of 4, 4, 5, 6, 6, 7, 8?",
            "options": ["4", "5", "6", "7", "8"],
            "correctIndex": 2
        },
        "q8": {
            "question": "What is the median of 1, 6, 7, 8, 9, 10, 12?",
            "options": ["6", "7", "8", "9", "10"],
            "correctIndex": 2
        },
        "q9": {
            "question": "What is the range of 2, 4, 6, 8, 10, 12?",
            "options": ["8", "9", "10", "11", "12"],
            "correctIndex": 2
        },
        "q10": {
            "question": "What is the mean of 1, 3, 5, 7, 9?",
            "options": ["4", "5", "6", "7", "8"],
            "correctIndex": 1
        }
    }
}

// init express app.
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});

// retrieve question data from the API.
app.get("/api", (req, res) => {
    const topic = req.query.topic;
    const numQuestions = req.query.numberOfQs;

    if (topic && numQuestions) {
        let newData = {}
        for (let i = 1; i < numQuestions+1; i++) {
            newData[`q${i}`] = data[topic][`q${i}`]
        }
        res.send(newData[topic]);
    } else if (topic && !numQuestions) {
        // if no number of questions is specified, send all questions.
        res.send(data[topic]);

    } else {
        res.send(data);
    }
})

// retrieve API's status.
app.get("/status", (req, res) => {
    const status = {
        "status": "Running",
        "statusCode": 200
    }

    res.send(status)
})