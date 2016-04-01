var tests = [];
var key = "tkjxrf";




var test = {desc: "simple stdout c++",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream>   \n   #include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n cout << 11111 << greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["std1","std2"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": null,
            "stdout": ["11111std1\n", "11111std2\n"],
            "stderr": ["",""]
        }
    }
};
tests.push(test);

//===============================================================================================================================================================================

test = {desc: "simple adding c++",
    lang: "cpp",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream>\nusing namespace std;\nint main(){int a = 0; \n int b = 0;\n" +
        "cin >> a;cin >> b;\ncout<<a<<\" \"<<b<<\" \"<<\"res:\"<<a+b<<endl;\nfor(long i=0; i<100;i++){};return 0;}",
        "language":"cpp",
        "testCases":["2 3","4 5"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": null,
            "stdout": ["2 3 res:5\n", "4 5 res:9\n"],
            "stderr": ["", ""]
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


test = {desc: "simple adding java",
    lang: "java",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "import java.util.Scanner;\n public class test {\n    public static void main(String[] args) {\n   Scanner in = new Scanner(System.in);\n        int a = in.nextInt();\n   int b = in.nextInt();\n        System.out.print(a+b);\n    }\n}",
        "language":"java",
        "testCases":["2 4", "4 5"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": null,
            "stdout": ["6", "9"],
            "stderr": ["", ""]
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================


module.exports = tests;

