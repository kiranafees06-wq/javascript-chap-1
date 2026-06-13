// prob # 01

document.getElementById('signupForm').addEventListener('submit' , function(e){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    e.preventDefault();
    document.getElementById('result').innerHTML = 'Name: ' + name + '<br>' + 'Email: ' + email + '<br>' + 'Password: ' + password;
});

// prob # 2

function moreContent(){
    document.getElementById('content').innerText += 'Saepe amet hic eius quisquam, libero cumque harum ducimus nostrum minus sequi at? Harum magni quibusdam blanditiis, minima fugit minus cum maxime!'

    document.getElementById('more').style.display = 'none';
}

// prob # 3

function deletePart(btn){
    btn.parentNode.parentNode.remove();
}

function editPart(btn){
    
}
