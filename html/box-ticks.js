window.addEventListener('message', function(event) {

    switch (event.data.action) {
        case 'tick';
        $(".vida").css("height", event.data.health + "%");
        $(".shield").css("height", event.data.armour + "%");
        $(".thirst").css("height", event.data.thirst + "%");
        $(".hunger").css("height", event.data.hunger + "%");
        $(".stamina").css("height", event.data.stamina + "%");
        $(".lungs").css("height", event.data.oxygen + "%");
        break
    }
});