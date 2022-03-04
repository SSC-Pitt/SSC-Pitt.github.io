console.log('loaded get publications');

function renderPublication(publication) {
    const pubList = $('#publication-list');
    pubList.append(`<li class="publication-list-entry>
        <div class="title">
            <div class="user-avatar"></div>
            <div class="title-text">${publication.Ti}</div>
        </div>
        <div class="lab-author"></div>

    </li>`)
}

$(document).ready(() => {
    let authorCondition = '';

    for (let author of fakeabase.getUsers()) {
        authorCondition += `AA.AuId=${author.academicId},`
    }

    console.log('authors', authorCondition);

    $.ajax({
        method: 'GET',
        url: `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=Composite(Or(${authorCondition}))&count=2&attributes=Ti,Y,CC,AA.AuN,AA.AuId&subscription-key=4f9e77f4788f4794ad2aed8b3303eb46`,
        crossOrigin: true,
        headers: {
            accept: 'application/json'
        },
        success: (res) => {
            console.log('we back', res.entities);
        }
    });
});