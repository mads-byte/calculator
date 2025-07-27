# Instructions<br>
## Enter any expression you would like to evaluate with the exception of expressions that include:
- Letters
- Division by zero
- Any otherwise invalid expressions (i.e; "4++--/*-=")
- Any operators not included on the calculator

## You may enter input by:
- Using the keyboard while input box is in focus
- Clicking the buttons on the calculator

## You may evaluate and see the result of your expression by:
- Clicking the "=" button
- Pressing the Enter/Return key
- Pressing the "=" on the keyboard

## For Developers:
- On line 25 of index.js, you may see: button.blur(). If you choose to fork this repository, do not remove this. Although it may seem unnecessary, this was used to fix a bug that occurred when clicking the enter key while another button was still in focus. If the button was in focus while clicking the enter key, the value of the button would continuously append to the input box. To prevent this, I ensured that all buttons came out of focus immediately after being pressed. 