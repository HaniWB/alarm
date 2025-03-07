# Countdown Timer with Breaks

This is a simple countdown timer application that includes a work-break cycle, inspired by the Pomodoro Technique. The timer starts with 25 minutes of work, followed by a 5-minute break, and after four cycles, a longer 15-minute break. The app plays an alert sound when it's time for a break or when the session ends.

## Features

- **Start, Stop, and Skip Buttons:**
  - **Start:** Starts the countdown from 25 minutes.
  - **Stop:** Stops the countdown at any point.
  - **Skip:** Skips the current cycle (starts a break early or finishes the session early).
  
- **Work/Break Cycle:**
  - **25 minutes of work:** The timer begins with a 25-minute work session.
  - **5-minute break:** After the work session ends, a 5-minute break is prompted.
  - **15-minute break after 4 cycles:** After completing four cycles of work and short breaks, a 15-minute "real" break is prompted.

- **Alert Sound:** Plays a sound whenever the cycle changes (work to break or vice versa).

## Video Demo

Here’s a quick demo of how the Countdown Timer works:

[Watch the Video](https://www.loom.com/share/d94a74b523f742569a01586e40005197?sid=529292d7-e38f-4805-a4cd-436e66fdcbca)

## Technologies Used

- **HTML**: Basic structure and layout.
- **CSS**: For styling the app.
- **JavaScript**: Functionality for the timer and controls.
- **Lodash**: Utility library for handling various JavaScript tasks.
- **Webpack**: Bundles the JavaScript files and assets (such as the sound file).
- **MP3 Sound**: Plays a sound when switching between work and break times.

## How to Use

1. **Open the Application:**
   - Open `index.html` in your browser.

2. **Control the Timer:**
   - **Start**: Click the "Start" button to begin the 25-minute work session.
   - **Stop**: Click the "Stop" button to halt the timer at any point.
   - **Skip**: Click the "Skip" button to instantly trigger the break.

3. **Timer Behavior:**
   - The timer starts at 25 minutes and counts down every second.
   - After the work session is finished (25 minutes), it prompts a 5-minute break.
   - After 4 work-break cycles, a 15-minute break is prompted instead.
   
4. **Alerts and Sounds:**
   - Each break will trigger an alert and play a sound.
   - When the cycle is over (back to work), it will also play a sound and notify you.


