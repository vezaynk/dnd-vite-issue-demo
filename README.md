# Vite Production Issue

## Description:

React-dnd with multiple back-ends does not function when a production build is made, but _does_ work in dev builds.

## Errors, logs, etc

The application renders and is otherwise interactive (aside from the issue described here). There are no errors/warnings/etc in the console.

## Platforms affected:

I have limited devices to test on. I have only tested and had this happen on iOS.

## Reproduction steps:

1. Install dependencies: `npm i`
2. Run dev build `npm run dev -- --host`
3. Run production build `npm run build && npm run preview -- --host`
4. Access both pages on a mobile devices (iOS safari)

## Expected Results

Dragging the "Hello World!" text should generate a preview on both pages.

## Actual Results

Dragging the "Hello World!" text only works on the page running from `npm run dev`.
