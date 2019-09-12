function graduates(students) {
    if (students.length < 1) {
        return {};
    }

    var result = {};
    var lulus = {};

    for (let i = 0; i < students.length; i++) {
        if (students[i].class === "foxes") {
            lulus["foxes"] = [];
        } else if (students[i].class === "wolves") {
            lulus["wolves"] = [];
        } else if (students[i].class === "tigers") {
            lulus["tigers"] = [];
        }
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].class === "foxes" && students[i].score > 75) {
            var data = {
                name: students[i].name,
                score: students[i].score
            }
            lulus.foxes.push(data);
        } else if (students[i].class === "wolves" && students[i].score > 75) {
            var data = {
                name: students[i].name,
                score: students[i].score
            }
            lulus.wolves.push(data);
        } else if (students[i].class === "tigers" && students[i].score > 75) {
            var data = {
                name: students[i].name,
                score: students[i].score
            }
            lulus.tigers.push(data);
        }
    }

    return lulus;


}

console.log(graduates([{
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
console.log("====================================");

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
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
console.log("====================================");
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}