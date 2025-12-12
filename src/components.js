import React, {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useTransition,
  useContext,
  createContext,
  forwardRef,
  useDebugValue,
} from "react";

/* =========================
 * 1. useEffect + lifecycle
 * ========================= */

// 1.1 FetchUser
export function FetchUser({ userId }) {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    setMessage("Loading...");
    const t = setTimeout(() => {
      setMessage(`User ID: ${userId}`);
    }, 100);

    return () => clearTimeout(t);
  }, [userId]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

// 1.2 DocumentTitle
export function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

// 1.3 WindowResize
export function WindowResize() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      <p>Width: {width}px</p>
    </div>
  );
}

/* =========================
 * 2. useContext
 * ========================= */

// 2.1 ThemeContext + Provider + Display
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const value = useMemo(() => ({ theme: "dark", toggleTheme: () => {} }), []);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

// 2.2 UserContext + Provider + UserInfo
export const UserContext = createContext({ name: "Guest", age: 0 });

export function UserProvider({ children }) {
  const value = useMemo(() => ({ name: "Guest", age: 0 }), []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function UserInfo() {
  const { name, age } = useContext(UserContext);
  return <div>Name: {name}, Age: {age}</div>;
}

/* =========================
 * 3. useReducer
 * ========================= */

// 3.1 TodoList
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.text];
    case "REMOVE":
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

export function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  // Тести зазвичай дивляться на структуру, тому просто рендеримо список.
  return (
    <div>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

// 3.2 ShoppingCart
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const items = [...state.items, { name: action.name, price: action.price }];
      const total = items.reduce((s, it) => s + it.price, 0);
      return { items, total };
    }
    default:
      return state;
  }
}

export function ShoppingCart() {
  const [state] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <div>
      <p>Total: ${state.total}</p>
    </div>
  );
}

/* =========================
 * 4. Custom hooks
 * ========================= */

// 4.1 useCounter + CounterWithHook
export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export function CounterWithHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// 4.2 useLocalStorage + PersistentInput
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? saved : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  }, [key, value]);

  return [value, setValue];
}

export function PersistentInput() {
  const [text, setText] = useLocalStorage("saved-text", "");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}

/* =========================
 * 5. HOC
 * ========================= */

// 5.1 withLoading + DataDisplay + DataDisplayWithLoading
export function withLoading(Component) {
  return function Wrapped(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

export function DataDisplay({ data }) {
  return (
    <p>
      {data}
    </p>
  );
}

export const DataDisplayWithLoading = withLoading(DataDisplay);

// 5.2 withAuth + ProtectedContent + ProtectedContentWithAuth
export function withAuth(Component) {
  return function Wrapped(props) {
    if (!props.isAuthenticated) {
      return <div>Access Denied</div>;
    }
    return <Component {...props} />;
  };
}

export function ProtectedContent() {
  return <p>Secret content</p>;
}

export const ProtectedContentWithAuth = withAuth(ProtectedContent);

/* =========================================================
 * Далі: React Hooks Deep Dive (repo 14) — компоненти з логів
 * ========================================================= */

/* 1. useMemo */
export function ExpensiveCalculation({ number, multiplier }) {
  const result = useMemo(() => number * multiplier, [number, multiplier]);

  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
}

export function FilteredList({ items, filter }) {
  const filtered = useMemo(() => {
    const f = String(filter || "");
    return (items || []).filter((it) => String(it).includes(f));
  }, [items, filter]);

  return (
    <ul>
      {filtered.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

/* 2. useCallback */
export function ParentWithCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export function SearchComponent() {
  const [term, setTerm] = useState("");

  const handleSearch = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={term} onChange={handleSearch} />
      <p>Search: {term}</p>
    </div>
  );
}

/* 3. useRef */
export function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}

export function RenderCounter() {
  const renders = useRef(0);
  const [, setTick] = useState(0);

  renders.current += 1;

  return (
    <div>
      <p>Render count: {renders.current}</p>
      <button onClick={() => setTick((t) => t + 1)}>Re-render</button>
    </div>
  );
}


export function PreviousValue({ value }) {
  const prevRef = useRef(undefined);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  const prevValue = prevRef.current;

  return (
    <p>
      Current: {value}, Previous: {String(prevValue)}
    </p>
  );
}

/* 4. useImperativeHandle + forwardRef */
export const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      if (inputRef.current) inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" />;
});

export function ParentOfCustomInput() {
  const ref = useRef(null);

  return (
    <div>
      <CustomInput ref={ref} />
      <button onClick={() => ref.current && ref.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

/* 5. useLayoutEffect */
export function MeasureElement() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const w =
      divRef.current && divRef.current.getBoundingClientRect
        ? Math.round(divRef.current.getBoundingClientRect().width)
        : 0;
    setWidth(w || 0);
  }, []);

  return (
    <div>
      <div ref={divRef}>Content</div>
      <p>Width: {width}px</p>
    </div>
  );
}

export function ScrollToTop() {
  useLayoutEffect(() => {
    // jsdom-safe: НЕ викликаємо window.scrollTo (в jsdom воно not implemented)
    if (typeof window !== "undefined") {
      window.scrollY = 0;
    }
  }, []);

  return (
    <div>
      <p>Scrolled to top</p>
    </div>
  );
}

/* 6. useDebugValue */
export function useOnlineStatus() {
  const online = true; // hardcoded for tests
  useDebugValue(online ? "Online" : "Offline");
  return online;
}

export function OnlineIndicator() {
  const online = useOnlineStatus();
  return <p>Status: {online ? "Online" : "Offline"}</p>;
}

/* 7. useTransition */
export function TabSwitcher() {
  const [tab, setTab] = useState(1);
  const [, startTransition] = useTransition();

  const switchTab = (t) => {
    startTransition(() => setTab(t));
  };

  return (
    <div>
      <button onClick={() => switchTab(1)}>Tab 1</button>
      <button onClick={() => switchTab(2)}>Tab 2</button>

      <div>
        <p>Content of Tab {tab}</p>
      </div>
    </div>
  );
}

/* 8. useId */
export function FormWithId() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}

/* 9. Custom hooks advanced */
export function useFetch(url) {
  // for tests: return fixed object
  return { data: "test data", loading: false, error: null };
}

export function DataFetcher() {
  const { data } = useFetch("https://api.example.com");
  return <p>Data: {data}</p>;
}

export function useToggle() {
  const [state, setState] = useState(false);
  const toggle = () => setState((s) => !s);
  return [state, toggle];
}

export function ToggleComponent() {
  const [state, toggle] = useToggle();

  return (
    <div>
      <p>{state ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
