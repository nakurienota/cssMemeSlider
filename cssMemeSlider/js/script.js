let firstBtn = document.getElementById('first');
let secondBtn = document.getElementById('second');
let thirdBtn = document.getElementById('third');
let fourthBtn = document.getElementById('fourth');
let memImg = document.getElementById('meme-img');
let memText = document.getElementById('meme-text');

function switchSlider(number) {
  let checked = document.getElementsByClassName('slider-checked');
  for (var i = 0; i < checked.length; i++) switchStateToUnchecked(checked[i]);

  switch (number) {
    case 1: {
      memImg.firstElementChild.src = "img/cleancode.jpg";
      memText.firstElementChild.textContent = 'Cleancode mem';
      switchStateToChecked(firstBtn);
      break;
    }
    case 2: {
      memImg.firstElementChild.src = "img/bag_fix.jpeg"
      memText.firstElementChild.textContent = 'Bag fix mem'
      switchStateToChecked(secondBtn);
      break;
    }
    case 3: {
      memImg.firstElementChild.src = "img/deadline.jpeg"
      memText.firstElementChild.textContent = 'Deadline mem'
      switchStateToChecked(thirdBtn);
      break;
    }
    case 4: {
      memImg.firstElementChild.src = "img/gitguru.jpg"
      memText.firstElementChild.textContent = 'Girguru mem'
      switchStateToChecked(fourthBtn);
      break;
    }
  }
}

function switchStateToUnchecked(button) {
  button.classList.add('slider-unchecked');
  button.classList.remove('slider-checked');
}

function switchStateToChecked(button) {
  button.classList.add('slider-checked');
  button.classList.remove('slider-unchecked');
}

firstBtn.addEventListener('click', () => switchSlider(1));
secondBtn.addEventListener('click', () => switchSlider(2));
thirdBtn.addEventListener('click', () => switchSlider(3));
fourthBtn.addEventListener('click', () => switchSlider(4));
