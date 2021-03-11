const authors = {
    'uQTkheYAAAAJ': {
        name: 'Rosta Farzan',
        avatar: 'rosta.jpg',
    },
    'cvdKPmQAAAAJ': {
        name: 'Ang Li',
        avatar: 'AngProfilePhotoCrop1.jpg',
    },
    'aq5E6LEAAAAJ': {
        name: 'Keyang Zheng',
        avatar: 'keyang.jpg'
    },
    't3icM7UAAAAJ': {
        name: 'Pranut Jain',
        avatar: 'pranut.jpg',
    }
}

function scrapePublications(response) {
    console.log('response', response);
}

$(document).ready(() => {
    console.log('Doc ready');

    // $.ajax({
    //     method: 'GET',
    //     url: 'https://scholar.google.com/citations?hl=en&user=t3icM7UAAAAJ&view_op=list_works&sortby=pubdate',
    //     crossOrigin: true,
    //     headers: {
    //         accept: 'text/html',
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     success: (res) => {
    //         console.log('we back');
    //     }
    // });

    const xhr = new XMLHttpRequest();
    const url = 'https://scholar.google.com/citations?hl=en&user=t3icM7UAAAAJ&view_op=list_works&sortby=pubdate';

    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'text/html');
    xhr.onreadystatechange = scrapePublications;
    xhr.send();
});