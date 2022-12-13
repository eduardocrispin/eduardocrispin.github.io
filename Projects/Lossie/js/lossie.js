//Create variables
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;

//Get monster from Lottie
let monster =
bodymovin.loadAnimation({
      container: animationMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/d37c5ad4-fbea-4d1c-97b2-fa46944b3755/bjGnr8kTJt.json"
    });


    //Monster emote with Event Listeners
    // Play excited frames

    animationMonster.addEventListener('click', function() {
        monster.playSegments([110, 215],true);
    })

    animationMonster.addEventListener('mouseleave', function() {
        monster.playSegments([220, 302],true);
    })

    animationMonster.addEventListener('mouseenter', function() {
        monster.playSegments([1, 110],true);
    })

    let toggle =
    bodymovin.loadAnimation({
          container: animationToggle,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/f9445402-5897-4fa0-9222-250841f728fa/25ytuFfEgI.json"
        });



    //Toggle to one side
animationToggle.addEventListener('click', function(){
    if (toggle_c == 0) {
        toggle.playSegments([1,20], true);
        toggle_c = toggle_c +1;
    } else {
        toggle.playSegments([21,60], true);
        let toggle_c = 0;
    }
})
