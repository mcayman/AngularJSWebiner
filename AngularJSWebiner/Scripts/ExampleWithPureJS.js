//Javascript Abstraction
/*
var doCoding = function (f) {
    f();
};

var coding1 = function () {
    console.log("Coding1");
};

var coding2 = function () {
    console.log("Coding2");
};

doCoding(coding1);
doCoding(coding2);



var CreateWriter = function (f) {
    f();
};


var writeCommand1 = function () {
    console.log("Writer1...");
}

var writeCommand2 = function () {
    console.log("Writer2...");
}


CreateWriter(writeCommand1);
CreateWriter(writeCommand2);


*/


//Javascript ile molules



var Programmer = function () {

    var CreateCoder = function () {

        var counter = 0;

        var task1 = function () {
            counter++;
            console.log("Task1 running, counter:" + counter);
        }

        var task2 = function () {
            counter++;
            console.log("Task2 running, counter:" + counter);
        }

        return {
            Job1: task1,
            Job2: task2
        }

    }

    var Coder = CreateCoder();
    Coder.Job1();
    Coder.Job2();
    

}


Programmer();

//dışarı açık bir şekilde kullanım için


var CreateCoderBase = function () {

    var counter = 0;

    var task1 = function () {
        counter++;
        console.log("Task1__ running, counter:" + counter);
    }

    var task2 = function () {
        counter++;
        console.log("Task2__ running, counter:" + counter);
    }

    return {
        Job1: task1,
        Job2: task2
    }

}

var Coder = CreateCoderBase();
Coder.Job1();
Coder.Job2();


//sayfa yüklendiğinde çalışması için


(function () {

    var CreateCoder = function () {

        var counter = 0;

        var task1 = function () {
            counter++;
            console.log("Task1 running, counter:" + counter);
        }

        var task2 = function () {
            counter++;
            console.log("Task2 running, counter:" + counter);
        }

        return {
            Job1: task1,
            Job2: task2
        }

    }

    var coder = CreateCoder();
    coder.Job1();
    coder.Job2();

})();






