function toggleAnswer(id) {
  var question = $('#' + id).prev('.question');
  var answer = $('#' + id);

  if (answer.is(':visible')) {
    answer.slideUp();
    question.removeClass('rotate');
  } else {
    $('.answer').slideUp(); // Hide other answers
    $('.question').removeClass('rotate'); // Remove rotation from other questions
    answer.slideDown();
    question.toggleClass('rotate');
  }
}

gsap.to('.nav', {
    backgroundColor: "#fff",
    // height: "105px",
    borderBottom: '1px solid #D3D3D3',
    duration: 0.2,
    scrollTrigger: {
        trigger:"#navbar",
        scroller:"body",
        // markers: true,
        start : "top -1%",
        end: "top -2",
        scrub : 0.8
    }
 })

 let btn = document.querySelector(".top-button");
 btn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
 });

function hamburgermenu(){
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const navin = document.querySelector(".menuPage");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
    navin.classList.toggle("active");
}
