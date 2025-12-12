# React Hooks Deep Dive Lesson - Final

This project contains advanced exercises to master all React Hooks. Follow the instructions for each exercise precisely. The automated tests will check your work against these exact requirements.

## Exercises

### 1. useMemo and Performance
- **Task 1.1**: Create a component named `ExpensiveCalculation` that accepts props `number` and `multiplier`. Use `useMemo` to calculate `number * multiplier` only when these props change. Return a `<div>` with a `<p>` showing "Result: [result]".
- **Task 1.2**: Create a component named `FilteredList` that accepts a prop `items` (array of strings) and `filter` (string). Use `useMemo` to filter items that include the filter string. Return a `<ul>` with filtered items as `<li>` elements.

### 2. useCallback
- **Task 2.1**: Create a component named `ParentWithCallback` that has a count state (starting at 0) and uses `useCallback` to create a stable `handleClick` function that increments count. Return a `<div>` with count in a `<p>` and a button with text "Click" that calls handleClick.
- **Task 2.2**: Create a component named `SearchComponent` that has a search term state. Use `useCallback` to create a `handleSearch` function that updates the search term. Return a `<div>` with an `<input>` and a `<p>` displaying "Search: [term]".

### 3. useRef
- **Task 3.1**: Create a component named `FocusInput` with an input and a button. Use `useRef` to get a reference to the input element. When the button (with text "Focus") is clicked, focus the input. Return a `<div>` containing both elements.
- **Task 3.2**: Create a component named `RenderCounter` that uses `useRef` to track how many times the component has rendered. Display "Render count: [count]" in a `<p>`. Include a button with text "Re-render" that triggers a state update (using useState with a dummy state).
- **Task 3.3**: Create a component named `PreviousValue` that accepts a prop `value`. Use `useRef` and `useEffect` to track the previous value. Display "Current: [value], Previous: [prevValue]" in a `<p>`. If there's no previous value, show "undefined".

### 4. useImperativeHandle with forwardRef
- **Task 4.1**: Create a component named `CustomInput` using `forwardRef` that exposes a `focus` method via `useImperativeHandle`. The component should render an `<input>` element. Then create a parent component named `ParentOfCustomInput` that uses a ref to call the focus method when a button (with text "Focus Input") is clicked. Return both components for export.

### 5. useLayoutEffect
- **Task 5.1**: Create a component named `MeasureElement` that uses `useLayoutEffect` to measure the width of a div element after render. Store the width in state. Return a `<div>` with ref containing text "Content" and a `<p>` showing "Width: [width]px". If width is 0, show "Width: 0px".
- **Task 5.2**: Create a component named `ScrollToTop` that uses `useLayoutEffect` to scroll to the top of the window on mount (set `window.scrollY` to 0). Return a `<div>` with text "Scrolled to top" in a `<p>`.

### 6. useDebugValue
- **Task 6.1**: Create a custom hook named `useOnlineStatus` that returns a boolean (hardcoded to `true` for testing). Use `useDebugValue` to display "Online" or "Offline" in React DevTools. Create a component named `OnlineIndicator` that uses this hook and displays "Status: Online" or "Status: Offline" in a `<p>`.

### 7. useTransition (React 18)
- **Task 7.1**: Create a component named `TabSwitcher` that uses `useTransition` to handle tab switching. Have two tabs: "Tab 1" and "Tab 2". Use `startTransition` when switching. Display current tab content in a `<div>`. Show "Content of [Tab X]" in a `<p>`. Include two buttons with text "Tab 1" and "Tab 2" for switching.

### 8. useId
- **Task 8.1**: Create a component named `FormWithId` that uses `useId` to generate unique IDs for form elements. Create an input field with a label "Name:" and connect them using the generated ID. Return a `<div>` containing the label and input.

### 9. Custom Hooks - Advanced
- **Task 9.1**: Create a custom hook named `useFetch` that accepts a URL and returns `{ data, loading, error }`. For testing, return `{ data: 'test data', loading: false, error: null }`. Create a component named `DataFetcher` that uses this hook with URL "https://api.example.com" and displays the data in a `<p>` with text "Data: [data]".
- **Task 9.2**: Create a custom hook named `useToggle` that returns `[state, toggle]` where state is a boolean (initial false) and toggle is a function to flip it. Create a component named `ToggleComponent` that uses this hook and shows "ON" or "OFF" in a `<p>`, plus a button with text "Toggle".

## Getting Started
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Complete the tasks in `src/components.js`.
4. Run the tests to check your progress.

## Testing
Run the tests to check your progress. Each task has its own test suite.
```bash
npm install
npm test
```

## Submission
- Push your changes to your GitHub repository.
- Ensure all tests pass.
- Submit the repository link to your instructor.
# React-Hooks-Deep-Dive
