### (17) React Hook
#### Pengertian React Hook
React hook merupakan fitur baru di react 16.8. Dengan hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas

#### Hooks pada react
##### Hooks Dasar
1. useState
2. useEffect
3. useContext

##### Hooks Tambahan
1. useReducer
2. useCallback
3. useMemo
4. useRef
5. useImperativeHandle
6. useLayoutEffect
7. useDebugValue

#### Aturan pada hooks
1. Hanya panggil hooks di tingkat atas, jangan memanggil hooks di dalam loops, conditions, atau nested function
2. Hanya panggil hooks dari fungsi-fungsi react. Jangan memanggil hooks dari fungsi-fungsi javascript biasa. Kita dapat : Memanggil hooks dari komponen-komponen fungsi react, dan juga memanggil hooks dari custom hooks.

#### Custom Hooks
Membuat hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
