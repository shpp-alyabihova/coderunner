var tests = [];
var key = "tkjxrf";


test = {desc: "wrong secret key",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": "secret_key",
        "code": "",
        "language":"",
        "testCases":[]
    },
    "resBody": {
        "error": {
            "code": "403",
            "message": "Access denied"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================

test = {desc: "empty userName",
    lang: "cpp",
    req: {
        "userName": "",
        "serverSecret": key,
        "code": "#include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2"]
    },
    "resBody": {
        "error": {
            "code": "400",
            "message": "Wrong parameters"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "empty serverSecret",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": "",
        "code": "#include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2"]
    },
    "resBody": {
        "error": {
            "code": "400",
            "message": "Wrong parameters"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "empty code",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "",
        "language":"cpp",
        "testCases":["std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2"]
    },
    "resBody": {
        "error": {
            "code": "400",
            "message": "Wrong parameters"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "empty language",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"",
        "testCases":["std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2", "std1","std2"]
    },
    "resBody": {
        "error": {
            "code": "400",
            "message": "Wrong parameters"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "empty testCases",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp"
    },
    "resBody": {
        "error": {
            "code": "400",
            "message": "Wrong parameters"
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================





module.exports = tests;

