function highestScore(students) {
    if (students.length < 1) {
        return {};
    }

    var result = {};
    var foxes = [];
    var wolves = [];
    var tigers = [];

    for (let i = 0; i < students.length; i++) {
        var nilai = students[i].score;
        if (students[i].class === "foxes") {
            foxes.push(nilai);
        } else if (students[i].class === "wolves") {
            wolves.push(nilai);
        } else if (students[i].class === "tigers") {
            tigers.push(nilai);
        }
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].score === foxes[0]) {
            result["foxes"] = {
                name: students[i].name,
                score: students[i].score
            }
        } else if (students[i].score === wolves[0]) {
            result["wolves"] = {
                name: students[i].name,
                score: students[i].score
            }
        } else if (students[i].score === tigers[0]) {
            result["tigers"] = {
                name: students[i].name,
                score: students[i].score
            }
        }
    }

    // console.log(foxes);
    // console.log(wolves);
    // console.log(tigers);

    return result;


}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}