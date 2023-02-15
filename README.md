# synchronizing-with-effects

In this read, I learnt:

- **effects let you run some code logic right after react renders** in order to synchronize your component with a system outside of react e.g. a network, a browser API etc
- by default, an effect happens after rendering ends & the screen updates. `Everytime a component renders or updates, the code inside useEffect will run right after`. The useEffect will delay the code inside it from running until the component is displayed on the UI
- `an effect is a side-effect caused by rendering`
- there are **3 steps to writing an effect:**
  - [x] `Declare the effect`. Import **useEffect()** hook from react & call it at the top level of your component
  - [x] `Specify the effect dependency`. Most effects should only run when needed rather than after every render
  - [x] `Adding cleanup to the effect`. Specify how to stop, undo or cleanup whatever the effect was doing.
