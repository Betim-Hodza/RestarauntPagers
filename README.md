# Flipper Zero Restaraunt Pager Exploit

This is a small project demonstrating how a flipper zero can be used against restaurant pagers using insecure subGHZ signals.

## The Pagers themselves 
* LOUKIEN Restaurant Pagers... als Hotels Eatery Brewery: https://www.amazon.com/LOUKIENE-Restaurant-Customers-Vibration-Reminder/dp/B0D2296KFH 

* First steps were to obtain the signals and save them, I bought [Insert pager model] and started going 1 by 1 on each pager to save the signal that would ping them off. 

Now individually I can ping each pager and turn them on to annoy anyone :3, but it only works one by one

## Writing the mJS SubGhz Script

Next part was writing a short script to do this.

* During this time I found out the flipper zero had mJS libraries but on the official firmware it turned out not to be so. I went through trying to learn how to build Flipper Application Packages but came to no success as it was written using C, like it was an object oriented language.

I’m at this point where I’ve just flashed new firmware that hopefully supports subGHZ mJS library. https://momentum-fw.dev/update/ 

## Momentum firmware

* Momentum Firmware is a custom opensource firmware built uppon the original flipper zero firmware. 

1. To install it have an origianlly flash flipper zero and connect it to your pc
2. click the install button on the website
3. select you flipper zero
4. wait and follow instructions

* once i had the firmware flashed it gave the flipper zero a whole new style and feel and extended the mJS libraries which now included subGHZ library.

## SubGHZ Script

* This is a relativly simple script that prompts the user an option of bombing the pager once or infinitly
* By scanning the pagers previously collecting each of the ping signals
  * or you could even scan only one and change the hex for the address to obtain the same result
* i was able to loop through once or infinitly through each of the pagers thus pinging them all at the same time.
* the result is a loud and evil script showcasing the flipper zero's small capabilities