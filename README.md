### Overview

The clock tool allows the user to display and manipulate the time on both an analogue clock and a digital clock, and displays the time in words.


### Time

The three clocks each have a property "time" that point to the same time object. When the analogue or digital clocks are changed by the user, the clock changes this time object accordingly, and the main layer changes each clock to show this time. When we ask questions on the app we will want to have the clocks show different times to allow the user to set them up to the same time. This can be done by making the two clocks point to different time objects.


### Analogue clock

The analogue clock sets the angles of the hand sprites based on the time. When the user drags either hand (by clicking and dragging on the "hand-handle", a child sprite of the hand, each time the mouse moves the clock determines the angle of the mouse position to the centre and caluclates the time. The only complication is that we have to do slightly different behaviour when either of the hands passes the 12 o'clock position: minute hand has to increment/decrement the hour, hour hand has to change between AM and PM.


### Digital clock

The digital clock has four sprites representing each of the digits. When the time is set, the texture for each of these is changed to the digit it should be. The digits are each a seperate resource. When you press one of the digit change buttons it changes the digit and sets a timeout that, after a delay, will repeat and change the digit continuously, so a user can hold down the button instead of pressing it repeatedly.


### Settings

The tool can be in various configurations, either displaying both clocks, just analogue or just digital. The word clock, the word labels on the analogue clock and the numbers on the analogue clock are all toggleable. The digital clock can either be in 12 hour or 24 hour mode. These are all controlled via a settings page. The settings page does not use the common settings page, and we will be changing the way we deal with settings so there is probably no point in making it so.


### Representing the tool's state

The time of each clock is in a time object referred to by the 'time' property on each.