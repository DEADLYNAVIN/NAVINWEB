

document.addEventListener('DOMContentLoaded', function () {
    const exercises = document.querySelectorAll('.exercise');
    const exerciseName = document.getElementById('exercise-name');
    const exerciseGif = document.getElementById('exercise-gif');
    const timer = document.getElementById('timer');
    let interval;
    let isRunning = false;
    let timeLeft = 60;
    let currentExerciseIndex = 0;

    function loadExercise(index) {
        const exercise = exercises[index];
        const name = exercise.getAttribute('data-name');
        const gif = exercise.querySelector('img').getAttribute('src');
        exerciseName.textContent = name;
        exerciseGif.setAttribute('src', gif);
        resetTimer();
    }

    function nextExercise() {
        currentExerciseIndex++;
        if (currentExerciseIndex < exercises.length) {
            loadExercise(currentExerciseIndex);
            startTimer();
        } else {
            window.location.href = 'calories.html'; // Replace with your actual redirect URL
        }
    }

    exercises.forEach((exercise, index) => {
        exercise.addEventListener('click', function () {
            currentExerciseIndex = index;
            loadExercise(index);
        });
    });

    document.getElementById('startBtn').addEventListener('click', function () {
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', resetTimer);

    function startTimer() {
        isRunning = true;
        interval = setInterval(function () {
            if (timeLeft <= 0) {
                stopTimer();
                if (currentExerciseIndex === exercises.length - 1) {
                    alert('It\'s Result Time 🧐');
                }
                nextExercise();
            } else {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        isRunning = false;
    }

    function resetTimer() {
        stopTimer();
        timeLeft = 60;
        updateTimer();
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});

document.getElementById('homeBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Replace 'homepage.html' with your actual homepage URL
});
