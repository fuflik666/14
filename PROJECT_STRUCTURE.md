# React Hooks Deep Dive Lesson - Project Structure

## 📁 Directory Structure

```
react-hooks-deep-dive-lesson/
├── __tests__/                          # Test files directory
│   ├── task.1.1.ExpensiveCalculation.test.js
│   ├── task.1.2.FilteredList.test.js
│   ├── task.2.1.ParentWithCallback.test.js
│   ├── task.2.2.SearchComponent.test.js
│   ├── task.3.1.FocusInput.test.js
│   ├── task.3.2.RenderCounter.test.js
│   ├── task.3.3.PreviousValue.test.js
│   ├── task.4.1.CustomInput.test.js
│   ├── task.5.1.MeasureElement.test.js
│   ├── task.5.2.ScrollToTop.test.js
│   ├── task.6.1.useOnlineStatus.test.js
│   ├── task.7.1.TabSwitcher.test.js
│   ├── task.8.1.FormWithId.test.js
│   ├── task.9.1.useFetch.test.js
│   └── task.9.2.useToggle.test.js
├── src/
│   ├── components.js                   # Your implementation goes here
│   └── setupTests.js                   # Test setup configuration
├── .babelrc                            # Babel configuration
├── .gitignore                          # Git ignore rules
├── jest.config.js                      # Jest testing configuration
├── package.json                        # Project dependencies
├── PROJECT_STRUCTURE.md                # This file
└── README.md                           # Project instructions
```

## 🎯 Learning Topics

### 1. useMemo and Performance (2 tasks)
- Memoizing expensive calculations
- Optimizing filtered lists
- Understanding when to use useMemo

### 2. useCallback (2 tasks)
- Creating stable callback references
- Optimizing child component renders
- Preventing unnecessary re-renders

### 3. useRef (3 tasks)
- Direct DOM manipulation
- Persisting values across renders
- Tracking previous prop values

### 4. useImperativeHandle with forwardRef (1 task)
- Customizing ref exposure
- Creating imperative APIs
- Parent-child communication

### 5. useLayoutEffect (2 tasks)
- Synchronous DOM measurements
- Scroll position manipulation
- Understanding useEffect vs useLayoutEffect

### 6. useDebugValue (1 task)
- Custom hook debugging
- DevTools integration
- Better development experience

### 7. useTransition (React 18) (1 task)
- Non-blocking state updates
- Improving user experience
- Priority-based rendering

### 8. useId (1 task)
- Generating unique IDs
- Accessibility with form elements
- Server-side rendering compatibility

### 9. Custom Hooks - Advanced (2 tasks)
- Creating complex reusable hooks
- Data fetching patterns
- Toggle state management

## 📝 Task Format

Each task follows this naming pattern:
- **File:** `task.X.Y.ComponentName.test.js`
- **X** = Section number (1-9)
- **Y** = Task number within section

## 🧪 Testing

Run all tests:
```bash
npm test
```

Run specific test:
```bash
npm test task.1.1
```

Run tests in watch mode:
```bash
npm test -- --watch
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## ✅ Completion Criteria

- All 15 test files pass
- All hooks are used correctly
- Performance optimizations are properly applied
- Custom hooks follow best practices
- Ref forwarding works correctly

## 📚 Key Concepts Covered

- **useMemo:** Memoization for performance
- **useCallback:** Stable function references
- **useRef:** DOM access and value persistence
- **useImperativeHandle:** Custom ref APIs
- **useLayoutEffect:** Synchronous effects
- **useDebugValue:** Hook debugging
- **useTransition:** Concurrent rendering
- **useId:** Unique ID generation
- **Custom Hooks:** Advanced patterns

## 🔥 Advanced Patterns

This lesson covers the most advanced React Hooks patterns:

- ✅ Performance optimization strategies
- ✅ Ref forwarding and imperative handles
- ✅ React 18 concurrent features
- ✅ Complex custom hook creation
- ✅ DevTools integration
- ✅ SSR considerations
- ✅ Real-world patterns

## 🎓 Prerequisites

Before starting this lesson, you should be comfortable with:
- Basic React hooks (useState, useEffect)
- Component lifecycle
- Context API
- Basic performance concepts

## 💡 Pro Tips

- Use useMemo/useCallback only when necessary
- useRef doesn't trigger re-renders
- useLayoutEffect blocks visual updates
- Custom hooks should start with "use"
- Always cleanup effects properly
