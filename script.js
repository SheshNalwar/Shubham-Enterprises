function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    var isInfoVisible = window.getComputedStyle(info).getPropertyValue('display') !== 'none';

    // Toggle the display property
    info.style.display = isInfoVisible ? 'none' : 'block';

    // Move the remaining options down with margin
    var options = document.getElementsByClassName('option');
    var offset = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i].id !== infoId.replace('info', 'option')) {
            options[i].style.marginTop = offset + 'px';
            offset += 10; // Adjust the margin as needed
        }
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


 