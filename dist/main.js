const render = function (roster) {
    const source = $('#roster-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({roster})
    $('#team-container').empty().append(newHTML)
}

//why didn't this work?
// $('#roster-template').on("error", "img", function() {
//     $(this).attr('src', 'https://banner2.cleanpng.com/20181026/ajs/kisspng-the-nba-finals-orlando-magic-los-angeles-lakers-at-nba-2-17-free-agents-5bd2d52dc187b0.2626322915405437897927.jpg');
//   });

const display = function () {
    const team = $(input).val()
  
    $.get(`/nba/${team}`, function (roster) {
        render(roster)
    })
}
