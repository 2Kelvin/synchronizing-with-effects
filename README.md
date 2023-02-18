# synchronizing-with-effects

In this read, I learnt:

- **effects let you run some code logic right after react renders** in order to synchronize your component with a system outside of react e.g. a network, a browser API etc
- by default, an effect happens after rendering ends & the screen updates. `Everytime a component renders or updates, the code inside useEffect will run right after`. The useEffect will delay the code inside it from running until the component is displayed on the UI
- `an effect is a side-effect caused by rendering`
- there are **3 steps to writing an effect:**
  - [x] `Declare the effect`. Import **useEffect()** hook from react & call it at the top level of your component
  - [x] `Specify the effect dependency`. Most effects should only run when needed rather than after every render
  - [x] `Adding cleanup to the effect`. Specify how to stop, undo or cleanup whatever the effect was doing.
- add an **array of dependencies** to instruct react to **stop unnecessary reruns of useEffect after every render**
- **if your Effect depends on some prop/state to decide what to do, include that prop/state to the dependency array**
- `adding a prop/state to the dependency array means that react should skip rerunning your Effect if the prop/state in the dependency array did not change at all`
- **a dependency array can contain multiple dependencies**
- `react will ONLY skip rerunning your Effect if all the listed dependencies have not changed at all from the previous render`
- a dependency has to be something that you've used in your useEffect code
- `a useEffect WITH NO dependency array runs after every render`
- `a useEffect WITH AN EMPTY dependency array runs only when the component first appears/renders`
- `a useEffect WITH A LIST/ ONE dependency in its dependency array runs when the component first appears/renders and when (any of) the array dependencies/ dependency changes`
- `a **ref** is not included in a dependency array because **it'll always return the same DOM node object on every render, it doesn't change** therrefore will never cause a rerender on the parent component or useEffect itself.` This is called having a `stable identity`. However if a ref was passed from the parent component, you would have to include it in the dependency array if you don't know if the parent is passing the same ref or is passing one of several refs conditionally. Therefore, your Effect would depend on which ref is being passed.
- `useState's set functions are also ommitted as dependencies since they also have a stable identity`
