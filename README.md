# clojure-cheat-sheets
Personal repo for working with clojure

## Opstart af shadow-cljs project
https://www.jost.dk/cljs/


## functions
filter

variadic functions take a variable number of parameters:
```
((fn sum [& args] (apply + args)) 5 8 4 6) ;; returns sum, 23
```
