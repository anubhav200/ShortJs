/**
 * Created with JetBrains WebStorm.
 * User: Anubhav
 * Date: 5/19/13
 * Time: 4:54 PM
 * To change this template use File | Settings | File Templates.
 */

Package("MyPackage.MyClasses.type1Class");

Class.define("test",function(){
    this["test"]=function(){
        alert("success");
    }
});

Class.logStructure();