window.onload = function () {

    Package("org.anubhav.com");

    Import("MyPackage.MyClasses.type1Class.test");
    Import("MyPackage.MyClasses.type1Class.Calculator");

    Class.define("ClassA",function(){

        this.var12="var12Value";
        this.var13="var13Value";
        this["ClassA"]=function(param){
            alert(this.var12+" "+param.value);
        }

    });

   Class.extends("ClassA").define("testClass1",function(){
       this.var1="testVar";
       this.var12="testVar";
   });



    Class.logStructure();
    var obj=Class.new("testClass1");
    alert(obj.var13);

    var testObj=Class.new("test");

    Class.extends("Calculator").define("CalcMod",function(){
        this.sub=function(x,y){
            return x-y;
        }
    });

    var calcObj=Class.new("CalcMod");
    alert(calcObj.sub(1,2));






}
