document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    
    // Show the button with animation
    startButton.classList.remove('hidden');
    setTimeout(() => {
        startButton.classList.add('show');
    }, 100); // Delay to ensure the animation runs

    startButton.addEventListener('click', function() {
        // Add your logic to start the game here
        console.log('Game Dimulai!');
    });
});
