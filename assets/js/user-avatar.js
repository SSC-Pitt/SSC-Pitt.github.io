// user avatar setup
console.log('loaded user avatar');
$(document).ready(() => {
    authors = fakeabase.getUsers();

    $('.user-avatar').each(el => {
        const author = $(el).attr('data-user');

        $(el).css('background-image', users[author].avatar);
        console.log('set avatar for', author);
    })
});