let enabled_nsfw = true;

let data = [
    {
        "nsfw": false,
        "content": "Gotta Tokyo drift through the pearly gates",
        "datetime": "08/10/2023 11:53 PM"
    },
    {
        "nsfw": false,
        "content": "Prick garagefruit",
        "datetime": "08/22/2023 7:54 PM"
    },
    {
        "nsfw": true,
        "content": "It was a condom remark, Jesus. I'm not trying to flay you",
        "datetime": "08/22/2023 10:12 PM"
    },
    {
        "nsfw": true,
        "content": "...cummy tummy",
        "datetime": "08/23/2023 9:34 PM"
    },
    {
        "nsfw": false,
        "content": "Parallel universe you could've been passing liquids through security for years now",
        "datetime": "08/28/2023 8:24 PM"
    },
    {
        "nsfw": false,
        "content": "With the proper precautions in place, my particular... ✨interests✨ are actually quite sweet!",
        "datetime": "08/29/2023 9:23 PM"
    },
    {
        "nsfw": false,
        "content": "I've never been so jealous of garlic",
        "datetime": "09/09/2023 10:02 PM"
    },
    {
        "nsfw": true,
        "content": "I would like to stroke you, you're welcome!",
        "datetime": "09/10/2023 10:51 AM"
    },
    {
        "nsfw": false,
        "content": "I ONLY ASK HIM FOR ONE THING AND THATS A GODDAMN SUPERBOWL WIN and honestly I don't feel like that's too much to ask",
        "datetime": "09/10/2023 4:09 PM"
    }
];

let filteredData = filterQuotes();
window.onload = function() {
    newQuote();
}


/**
 * Filter out NSFW quotes if enabled_nsfw is false.
 */
function filterQuotes() {
    if (enabled_nsfw == true) {
        return data.slice();
    } else {
        return data.filter((quote) => {
            return quote.nsfw == false;
        });
    }
}


/**
 * Display new quote.
 */
function newQuote() {
    let numQuotes = filteredData.length;
    let newIdx = getRandomInt(numQuotes - 1);

    let quote = filteredData[newIdx];

    document.getElementById('quote-text').innerHTML = quote.content;
    document.getElementById('datetime').innerHTML = quote.datetime;

    // Remove used quote from list of available quotes
    // Refresh list if all quotes have been used
    filteredData.splice(newIdx, 1);

    if (filteredData.length == 0) {
        filteredData = filterQuotes();
    }
}


/**
 * Return random integer between 0 and the max value.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
