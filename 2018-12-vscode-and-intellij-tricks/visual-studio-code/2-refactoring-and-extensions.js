import { baz } from "./1-navigation";

export function foo() {
    return 42;
}

function bar() {
    return 2018;
}

foo()
baz()

/*

## Refactoring

* Rename Symbol `F2`
    * rename variables, functions
    * rename import
    * rename file
* Refactor... `Ctrl + Shift + R` - opens menu with refactors for current context
    * Extract Variable / Extract to Constant
    * Extract to Method
    * Extract to Function


## Extensions

* Use Release Notes to discover even more tips & tricks.
* Select text more quickly using [expand-region](https://marketplace.visualstudio.com/items?itemName=letrieu.expand-region)
* Review a [Github pull requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) directly from VSCode
    * checkout PR, test it locally, full context of PR, add / respond to review comments
    * still somewhat unstable and incomplete though

*/