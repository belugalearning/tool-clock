define(['clock'], function(Clock) {
    'use strict';

    var WordClock = Clock.extend({
        label:null,
        hour24:null,

        ctor:function() {
            this._super();
            this.label = cc.LabelTTF.create("", "mikadoBold", 40);
            this.addChild(this.label);
            this.hour24 = false;
        },

        displayTime:function() {
            var timeInWords = this.timeInWords();
            this.label.setString(timeInWords);
        },

        timeInWords:function() {
            var hours = this.time.hours;
            var minutes = this.time.minutes;
            var timeString = "";
            if (minutes === 0) {
                if (hours === 0) {
                    timeString += "midnight";
                } else if (hours === 12) {
                    timeString += "noon";
                } else {
                    timeString += this.hoursInWords(hours) + " o'clock";
                };
            } else if (minutes <= 30) {
                timeString += this.minutesInWords(minutes) + " past " + this.hoursInWords(hours);
            } else {
                timeString += this.minutesInWords(60 - minutes) + " to " + this.hoursInWords(hours + 1);
            }
            timeString = timeString.charAt(0).toUpperCase() + timeString.slice(1);
            return timeString;
        },

        minutesInWords:function(minutes) {
            var minutesInWords;
            if (minutes === 15) {
                minutesInWords = "quarter";
            } else if (minutes === 30) {
                minutesInWords = "half";
            } else {
                minutesInWords = this.numberInWords(minutes) + (minutes === 1 ? " minute" : " minutes");
            };
            return minutesInWords;
        },

        hoursInWords:function(hours) {
            var hoursInWords;
            hours %= 24;
            if (hours === 0) {
                hoursInWords = "midnight";
            } else if (this.hour24) {
                hoursInWords = this.numberInWords(hours);
            } else {
                if (hours === 12) {
                    hoursInWords = "noon";
                } else {
                    hoursInWords = this.numberInWords(hours % 12);
                };
            };
            return hoursInWords;
        },

        numberInWords:function(number) {
            var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
            var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
            var twenties = ["twenty"];
            for (var i = 1; i < digits.length; i++) {
                twenties.push("twenty-" + digits[i]);
            };
            var numbersInWords = digits.concat(teens).concat(twenties);
            return numbersInWords[number];
        },
    });

    return WordClock;
})
