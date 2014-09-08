konami-code
===========

A website konami code plugin.

This is an old konami code javascript file that I wrote a while ago.

The intension of the file is to allow you to include the javascript in the code from your website without needing any additional javascript libraries. The javascript file will write out a small html indicator element before the rest of the DOM is rendered. The file then listens for the konami code specific keystrokes in the specific order. As the keys are pressed in the correct order, each successful keypress will progressively change the indicator dots red. Once the code has been successfully entered, the javascript will fire a given method or function.

I wrote this file as I was starting to learn javascript. Looking back on it now there's a lot that can be done to improve it (and hopefully one day I'll get around to doing that;).
