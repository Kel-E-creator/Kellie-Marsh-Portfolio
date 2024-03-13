fetch('Portfolio.json').then(function (responce) {
    return responce.json()
}).then(function (data) {

const displayTarget = document.querySelector('#target');

let output = '';

console.log(data);

data.projects.forEach(function (project) {
    output += '<div class="projectstyle">';
   
    output += '<div class="column1">';
    output += '<h2 class="projectTitle"><span class="headers">' + "PROJECT NAME:" + '</span>' + project.name + '</h2>'
    output += '<img src="'+ project.image + '"/>'
    output += '<p class="mainText"><span class="headers">' + "SOFTWARE:" + '</span>' + project.software + '<p>'
    output += '<p class="mainText"><span class="headers">' + "PROJECT TYPE:" + '</span>' + project.type + '<p>'
    output += '<a class="btn4" href="' + project['live-link'] + ' " target="_blank">Live Site</a>';
    output += '<a class="btn4" href="' + project['git-hub'] + ' " target="_blank">Git Hub</a>';
    
    
    output += '</div>';

    output += '<div class="column2">';

    output += '<p class="mainText"><span class="headers">' + "PROJECT DESCRIPTION:" + '</span>' + project.description + '</p>'

    if (Array.isArray(project.description2)) {
        output += '<p class=mainText"> <ul>';
        project.description2.forEach(function(item) {
            output += '<li>' + item + '</li>';
        });
        output += '</ul></p>';
    } else {
        output += '<p class="mainText">' + project.description2 + '</p>';
    }

    if (Array.isArray(project.authors)) {
        output += '<p class="mainText"><span class="headers">PROJECT AUTHORS:</span> <ul>';
        project.authors.forEach(function(item) {
            output += '<li>' + item + '</li>';
        });
        output += '</ul></p>';
    } else {
        output += '<p class="mainText"><span class="headers">PROJECT AUTHORS:</span>' + project.authors + '</p>';
    }
 
    output += '</div>';

    output += '<div style="clear:both;"></div>';
 
    output += '</div>';

    output += '<div>';
    output += '<hr class="divider">';
    output += '</div>';
})
 displayTarget.innerHTML = output

})

