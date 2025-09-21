
Readme - **Calculator**, **Tic-Tac-Toe**, and **Stopwatch**. 

---

# Calculator

## Overview

A lightweight, responsive calculator web app that performs basic arithmetic operations (addition, subtraction, multiplication, division) plus decimal support, clear, and keyboard input. Ideal for learning DOM manipulation and event handling.

## Features

* Basic operations: +, -, ×, ÷
* Decimal numbers and backspace
* Keyboard support (digits, `Enter` = equals, `Backspace` = delete)
* Clear (AC) and +/- toggle
* Responsive layout for mobile and desktop

## Tech stack

* HTML, CSS (flexbox), JavaScript

## Usage

* Click buttons or use keyboard to type numbers and operators.
* Press `=` or `Enter` to compute result.
* Press `C` to reset.

## Implementation notes

* Keep numeric input as strings until evaluation to avoid floating-point surprises; use `Number()` or `parseFloat()` when computing.
* Protect against division by zero and show an error message such as `Error`.

## Example file structure

```
/calculator
  ├─ calculator.html
  ├─ calculator.css
  └─ calculator.js
```

---

# Tic-Tac-Toe

## Overview

A 2-player Tic-Tac-Toe web game (local two-player on the same device) and win/draw detection. Great for learning game state management and basic algorithms.

## Features

* 3×3 grid, alternating turns between X and O
* Win detection (rows, columns, diagonals)
* Draw detection
* Restart button and simple scorekeeping
* Optional: one-player mode vs CPU (random or minimax)

## Tech stack

* HTML, CSS(Grid), JavaScript . Optional: React for componentized version.

## Installation

1. Clone the repo: `git clone <repo-url>`
2. Open `index.html` (or `tictactoe.html`) in your browser.

## Usage

* Click a square to place your mark.
* Game shows current player and announces winner or draw.
* Press "Restart" to clear the board and play again.

## Implementation notes

* Represent board as an array of 9 elements; index mapping simplifies win checks.
* For CPU, start with a random move generator; upgrade to minimax for an unbeatable AI.

## Example file structure

```
/tictactoe
  ├─ tictactoe.html
  ├─ tictactoe.css
  └─ tictactoe.js
```

---

# Stopwatch

## Overview

A simple stopwatch web app for timing tasks, with start, stop, lap, and reset functionality. Useful for learning timers (`setInterval`), accurate elapsed time calculations, and UI updates.

## Features

* Start / Stop / Reset controls
* Lap recording (lists lap times)
* Millisecond precision display (mm\:ss\:ms)
* Keyboard shortcuts (optional: Space to start/stop)

## Tech stack

* HTML, CSS, JavaScript

## Installation

1. Clone the repo: `git clone <repo-url>`
2. Open `index.html` (or `stopwatch.html`) in your browser.

## Usage

* Click **Start** to begin timing.
* Click **Lap** to record the current time (optional).
* Click **Stop** to pause and **Reset** to clear.

## Implementation notes

* Use `performance.now()` or `Date.now()` for timestamps; compute `elapsed = now - startTime + previousElapsed` for accuracy across pauses.
* Use `requestAnimationFrame` or `setInterval` (e.g., 25–100 ms) to update the display; avoid very tight intervals to reduce CPU.

## Example file structure

```
/stopwatch
  ├─ stopwatch.html
  ├─ stopwatch.css
  └─ watch.js
  
  
```

---


---

*End of document.
