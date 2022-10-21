const boxes = document.querySelectorAll('.box');

checkBoxes = () => {
  const triggerHeight = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerHeight){
      box.classList.add('show');
    }
    else{
      box.classList.remove('show');
    }
  })
}

checkBoxes();
window.addEventListener('scroll', checkBoxes);

