//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentActive = 1;

        function update() {
            circles.forEach((circle, index) => {
                if (index < currentActive) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });

            prevButton.disabled = currentActive === 1;
            nextButton.disabled = currentActive === circles.length;
        }

        nextButton.addEventListener('click', () => {
            if (currentActive < circles.length) {
                currentActive++;
                update();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentActive > 1) {
                currentActive--;
                update();
            }
        });
