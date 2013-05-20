# ShortJs

#### `Awesome Class features and package manager for javascript.`

###This Library provides following features.

* Creating Javascript Classes.
* Inheriting(Single, Multiple, Multilevel) Javascript Classes.
* Importing Javascript Files.
* Maintaining and packaging javascript files.



Class
=======

####This variable supports following methods.

* define
* new
* extends
* logStructures

### Defining a class
```js
Class.define("ClassName",function(){
        
        var x=10;
        var y=20;
        
        this.sampleMethod = function(){
                
                alert("Hello world");
                alert(x+y);
        }
        });

```
### Creating object of class
```js

var classNameObject = Class.new("ClassName");

//calling method of class
className.sampleMethod();
```
        
### Defining class constructor

Defined as a normal method but it's name and class name should be same.
```js
Class.define("Calculator",function(){
        
        var x,y;
        
        this.someValue="SuperValue";
        
        //Constructor. Notice the name of this method is "Calculator" which is also the name of the class.
        this["Calculator"]=function(){
                x=10;
                y=20;
        }
        
        this.add = function(x,y){
                
                return x+y;
        }
        });

```

### Inheriting other classes

With the help of this library one can inherit one or more class,i.e Single, Multiple, Multilevel inheritance is now possible with the help of this library. 

Now we are going to extend above defined class.
```js
Class.extend("Calculator").define("MyCalculator",function(){
        
        this.someValue="Not a Super value. :)";
        this.subtract=function(x,y){
                        return x-y;
                }
});
        
```

### Use of Super.

In the above defined class both the parent class and sub class have public variable `this.someValue`.We can access parent variable by using Super variable.

```js
var myCalculatorObj=Class.new("MyCalculator");

alert(myCalculatorObj.someValue);//displays "Not a Super value. :)"
alert(myCalculatorObj.Super.Calculator.someValue);//displays "SuperValue"

//or
alert(myCalculatorObj.Super["Calculator"].someValue);//displays "SuperValue"

```

Package
=======

I) Creating Javascript Classes.
=======



Things that are not recommended.
=======


Putting your code in open.


```js
Class.define("TestClass",function(){
        var x=10;
        alert(x);//not recommended.
});
```


Recommended Way:-
```js
Class.define("TestClass",function(){
        var x=10;
        
        this.show=function(){
           
           alert(x);                
        }
});
```
