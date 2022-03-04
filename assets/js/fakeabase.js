// i added this to manage info about members of the lab across pages (e.g. projects, publications, etc.)
console.log('loaded fakeabase');
class Fakeabase {
    users = {
        'ang': {
            name: 'Ang Li',
            avatar: 'AngProfilePhotoCrop1.jpg',
            academicId: '2789811531',
            scholarId: 'cvdKPmQAAAAJ',
        },
        'ben': {
            name: 'Ben Stein',
            avatar: 'ben.jpg'
        },
        'keyang': {
            name: 'Keyang Zheng',
            avatar: 'keyang.jpg',
            academicId: '2791846989',
            scholarId: 'aq5E6LEAAAAJ',
        },
        'pranut': {
            name: 'Pranut Jain',
            avatar: 'pranut.jpg',
            academicId: '2943668520',
            scholarId: 't3icM7UAAAAJ',
        },
        'rosta': {
            name: 'Rosta Farzan',
            avatar: 'rosta.jpg',
            academicId: '2198655737',
            scholarId: 'uQTkheYAAAAJ',
        },
        'yingfan': {
            name: 'Yingfan Zhou',
            avatar: 'yingfan.jpg',
        }
    };

    getUsers = () => this.users;
}

const fakeabase = new Fakeabase();