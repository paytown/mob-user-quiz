const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
   
    const formDaddy = new FormData(profileForm);

    const userProfile = {
        name: formDaddy.get('name'),
        avatar: formDaddy.get('avatar')
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
    window.location = './quiz.html';
});