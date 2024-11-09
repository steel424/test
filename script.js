document.getElementById('survey-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const favoriteColor = document.getElementById('question1').value;
    const favoriteFood = document.getElementById('question2').value;

    // Send the data to your backend
    fetch('https://test-zj6t.onrender.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favoriteColor,
            favoriteFood
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Survey submitted successfully!');
    })
    .catch(error => {
        console.error('Error submitting the survey:', error);
        alert('There was an error submitting the survey.');
    });
});
