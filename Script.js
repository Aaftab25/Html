


function initiate()
{
        var saveButton =  document.getElementById('save');
    var retrieveButton =  document.getElementById('retrieve');
    var reviewButton =  document.getElementById('review');
    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
    reviewButton.addEventListener('click', reviewAll);
}

function saveItem()
{
    
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    var gender =  document.getElementById('gender').value;
    var desi = document.getElementById('desi').value;
    var salary = document.getElementById('salary').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var doj = document.getElementById('doj').value;
    var con = document.getElementById('con').value;
    sessionStorage[key] = [value];

}

function retrieveItem()
{
    var data = document.getElementById('data');
    var key = document.getElementById('key').value;
    var gender = document.getElementById('gender').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var doj = document.getElementById('doj').value;
    var con = document.getElementById('con').value;
    var value = sessionStorage[key];
    
    data.innerHTML = '<div>' + key + '\n' + '<div>' + value + '<br></div>'+ '\n' + '<div>' + gender + '<br></div>'+ '\n' + '<div>' + desi + '<br></div>'+ '\n' + '<div>' + salary + '<br></div>'
    + '\n' + '<div>' + location + '<br></div>'+ '\n' + '<div>' + email + '<br></div>'+ '\n' + '<div>' + doj + '<br></div>'+ '\n' + '<div>' + con + '<br></div>';
    
}

function reviewAll(){
    for(var i = 0; i < sessionStorage.length; i++)
    {
        var key = sessionStorage.key(i);
        var value = sessionStorage[key];
        data.innerHTML += '<div>' + key + '\n' + '<div>' + value + '<br></div>'+ '\n' + '<div>' + gender + '<br></div>'+ '\n' + '<div>' + desi + '<br></div>'+ '\n' + '<div>' + salary + '<br></div>'
        + '\n' + '<div>' + location + '<br></div>'+ '\n' + '<div>' + email + '<br></div>'+ '\n' + '<div>' + doj + '<br></div>'+ '\n' + '<div>' + con + '<br></div>';
    }
}

addEventListener("load", initiate);
// function initiate()
// {
//     var saveButton =  document.getElementById('save');
//     var viewButton =  document.getElementById('view');
//     saveButton.addEventListener('click', saveItem);
//    viewButton.addEventListener('click', viewItem);
// }

// function saveItem()
// {
//     var key = document.getElementById('key').value;
//     var age = document.getElementById('age').value;
//     // var gender = document.getElementById('gender').value;
//     // var desi = document.getElementById('desi').value;
//     // var salary = document.getElementById('salary').value;
//     // var location = document.getElementById('location').value;
//     // var email = document.getElementById('email').value;
//     // var doj = document.getElementById('doj').value;
//     // var con = document.getElementById('con').value;

//     sessionStorage[key] = age;

// }

// function viewItem()
// {
//     var data = document.getElementById('data');
//     var key = document.getElementById('key').value;
//     var age = sessionStorage[key];

//     data.innerHTM = '<div>' + key + ':' + age + '<div>';
// }

// addEventListener('load', initiate);