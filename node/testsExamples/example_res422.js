var tests = [];
var key = "tkjxrf";


//===============================================================================================================================================================================

test = {desc: "suspicious cpp code",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream> \n #include <fstream> \n #include <thread> \n  __asm__()\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["test1","std2"]
    },
    "resBody": {
        "code": 422,
        "response": [
            {
                "danger-level": 2,
                "text": "#include <fstream>",
                "comment": "Not allowed to use"
            },
            {
                "danger-level": 2,
                "text": "#include <thread>",
                "comment": "Not allowed to use"
            },
            {
                "danger-level": 3,
                "text": "asm",
                "comment": "Not allowed to use"
            }
        ]
    }
};

tests.push(test);

//===============================================================================================================================================================================

test = {desc: "suspicious java code",
    lang: "java",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "import java.awt.*; \n import java.util.*; Class<> \n import java.util.Scanner; \npublic class Main {public static void main(String[] args) {System.out.println(\"Hello world\");}",
        "language":"java",
        "testCases":[]
    },
    "resBody": {
        "code": 422,
        "response": [
            {
                "danger-level": 2,
                "text": "import java.awt.*",
                "comment": "Not allowed to use"
            },
            {
                "danger-level": 2,
                "text": "import java.util.*",
                "comment": "Not allowed to use"
            },
            {
                "danger-level": 3,
                "text": "Class",
                "comment": "Not allowed to use"
            }
        ]
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "exeeded limit test cases",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream> \n ...",
        "language":"cpp",
        "testCases":["std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2"]
    },
    "resBody": {
        "code": 422,
        "response": [
            {
                "danger-level": 1,
                "text": "Test Cases",
                "comment": "limit exceeded"
            }
        ]
    }
};

tests.push(test);

//===============================================================================================================================================================================

test = {desc: "suspicious test cases",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream> \n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["¬¢£¥§™","¥§™"]
    },
    "resBody": {
        "code": 422,
        "response": [
            {
                "danger-level": 2,
                "text": "Test case #1",
                "comment": "contains forbidden symbols"
            },
            {
                "danger-level": 2,
                "text": "Test case #2",
                "comment": "contains forbidden symbols"
            }
        ]
    }
};

tests.push(test);

//===============================================================================================================================================================================

test = {desc: "exeeded charecters limit test cases",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream> \n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["test1                                                                                                                                                                                          ","                                                                                                                                                                                      std2"]
    },
    "resBody": {
        "code": 422,
        "response": [
            {
                "danger-level": 1,
                "text": "Test case #1",
                "comment": "The characters limit exceeded"
            },
            {
                "danger-level": 1,
                "text": "Test case #2",
                "comment": "The characters limit exceeded"
            }
        ]
    }
};

tests.push(test);

//===============================================================================================================================================================================
module.exports = tests;

