//TODo: if a file is already included dont include it again...

//package management, class management
(function () {

    var packageStore={};

    //Stores classes
    var classStore={};

    //stores inherited classes names for each class.
    var classInheritanceStore={};
    this.Class = new function () {

        //@private
        var extendClassList=new Array();

        this.define=function(className,defination){

            if(extendClassList.length>0)
            {
                classInheritanceStore[className]=extendClassList;
                extendClassList=new Array();
            }
            classStore[className]=defination;

        };

        this.new=function(className,params){

            var classObj=new classStore[className];
            if(classInheritanceStore[className])
            {
                var inheritedClassObject={};
                inheritedClassObject["Super"]={};
                //copying inherited class variables
                //TODO:- resolve multiple inheritance ambiguity...right now the last class extended having matching content wil over write the ambiguity content
                for(var i in classInheritanceStore[className])
                {
                    var tempClassObject=new classStore[classInheritanceStore[className][i]];
                    for(var field in tempClassObject)
                    {
                        inheritedClassObject[field]=tempClassObject[field];
                    }
                    inheritedClassObject["Super"][classInheritanceStore[className][i]]=tempClassObject;
                }

                //copying original class variables over inherited once
                for(var field in classObj)
                {
                    inheritedClassObject[field]=classObj[field];
                }

                classObj=inheritedClassObject;
            }
            try{
                //run constructor.
                classObj[className](params);
            }
            catch(err){

                //if constructor not defined make default constructor.
                classObj[className]=function(){};
            }
            return classObj;
        };

        this.extends=function(className){

            if(!classStore[className])
            {
                throw "Unable to find Class with name "+ className;
            }

            extendClassList.push(className);

            return this;
        };

        this.logStructure=function(){
            console.log(packageStore);
        }

    };

    this.Package=function(location){
        //TODO:- include files in html dom from package name
        //clear previous class and inheritance cache.
        classStore={};
        classInheritanceStore={};

        location=location.split(".")

        function checkAndCreateInnerPackage(obj,locationArray)
        {
            if(!(locationArray.length==0))
            {
                if(!(obj[locationArray[0]]))
                {
                    obj[locationArray[0]]=new Object();
                }
                obj=obj[locationArray[0]];
                locationArray.shift();
                checkAndCreateInnerPackage(obj,locationArray);
            }
            else
            {
                if(!obj["classStore"])
                {
                    obj["classStore"]={};
                }
                classStore=obj["classStore"];
                if(!obj["classInheritanceStore"])
                {
                    obj["classInheritanceStore"]={};
                }
                classInheritanceStore=obj["classInheritanceStore"];
            }
        }
        checkAndCreateInnerPackage(packageStore,location);
    };



    this.Import=function(locationArray){
        var head=document.getElementsByTagName("head")[0];
        locationArray=locationArray.replace(/\./gi,"/");
        var scriptTemplate=document.createElement("script");
        scriptTemplate.type="text/javascript";
        scriptTemplate.setAttribute("src",locationArray+".js");
        head.insertBefore(scriptTemplate,head.children[0]);
    };

})(window, document)


/*

Package("org.anubhav.test");

Import("org.anubhav.test.*");

Class.extends("sdasdsa").extends("sadas").implements("dasdsd").define("MYClass",Function(){

//constructor
this["MyClass"]=function(){

}
}
 );

 var obj=Class.new("asd").params();

 */


