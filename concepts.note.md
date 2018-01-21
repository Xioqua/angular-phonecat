https://docs.angularjs.org/guide/concepts

This looks like normal HTML, with some new markup. In AngularJS, a file like this is called a __template__. (也就是我们的index.html)

When AngularJS starts your application, it parses and processes this new markup from the template using the compiler. (与传统前端不同,ng有个编译过程)

 The loaded, transformed and rendered DOM is then called the __view___.(视图是最后的处理结果)

 The first kind of new markup are the __directives__. They apply special behavior to attributes or elements in the HTML.

 In the example above we use the __ng-app__ attribute, which is linked to a directive that automatically initializes our application. (初始化)

The __ng-model__ directive stores/updates the value of the input field into/from a variable.(能够把input里的value值存进一个变量或从变量拿进去)

 __In AngularJS, the only place where an application should access the DOM is within directives.__(如果实在忍不住要写DOM,我也不会,hhh;官网说[指令](https://docs.angularjs.org/guide/directive)能够帮助你解决这个问题//TODO)

 he second kind of new markup are the __double curly braces__ `{{ expression | filter }}`: When the compiler encounters this markup, it will replace it with the evaluated value of the markup. 

 An __expression__ in a template is a JavaScript-like code snippet that allows AngularJS to read and write variables. Note that those variables are __not global variables__.Just like variables in a JavaScript function live in a scope, AngularJS provides a __scope__ for the variables accessible to expressions. (感觉scope的理解是ng的一个难点,不过就我短短的几个小时经验来看,在控制器里$scope确实能够读写模板里的表达式。具体这块还得加深理解//TODO)

A __filter__ formats the value of an expression for display to the user. In the example above, the filter currency formats a number into an output that looks like money.  

双向绑定的理解(TODO)

Adding UI logic: __Controllers__ // 中止ng1的学习

