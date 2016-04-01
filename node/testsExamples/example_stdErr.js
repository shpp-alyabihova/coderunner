var tests = [];
var key = "tkjxrf";


test = {desc: "call timeout",
    lang: "java",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "#include <iostream>\n using namespace std;\n int main() {string greeting;\n cin >> greeting;\n for(int i=0; i<10000000000000; i++){} \n cout<< greeting << endl;\n return 0;}",
        "language":"cpp",
        "testCases":["test1","std2"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": null,
            "stdout": ["", ""],
            "stderr": [
                "Time is out of running command >> echo \"test1\" | docker run --name=1456447004216 -i -m 512m --net none --rm -v /opt/shpp/coderunner/dockerShared/1456447004216:/opt/data --log-driver=json-file --log-opt max-size=1k cpp_img start",
                "docker: Error response from daemon: Conflict. The name \"/1456447004216\" is already in use by container e4bf434edbb3453ce6481806a325e42f4bf966080d22790e6a36e45cb2075f0d. You have to remove (or rename) that container to be able to reuse that name..\nSee 'docker run --help'.\nError: Command failed: docker: Error response from daemon: Conflict. The name \"/1456447004216\" is already in use by container e4bf434edbb3453ce6481806a325e42f4bf966080d22790e6a36e45cb2075f0d. You have to remove (or rename) that container to be able to reuse that name..\nSee 'docker run --help'.\n"
            ]
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================



test = {desc: "devision by zero java",
    lang: "java",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "import java.util.Scanner;\n public class test {\n    public static void main(String[] args) {\n   Scanner in = new Scanner(System.in);\n   for(int i=0; i<1000000; i++){int t = 5/i;} \n     int a = in.nextInt();\n   int b = in.nextInt();\n        System.out.print(a+b);\n    }\n}",
        "language":"java",
        "testCases":["2 4", "4 5"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": null,
            "stdout": [
                "",
                ""
            ],
            "stderr": [
                "Exception in thread \"main\" java.lang.ArithmeticException: / by zero\n\tat code.main(code.java:5)\nError: Command failed: Exception in thread \"main\" java.lang.ArithmeticException: / by zero\n\tat code.main(code.java:5)\n",
                "Exception in thread \"main\" java.lang.ArithmeticException: / by zero\n\tat code.main(code.java:5)\nError: Command failed: Exception in thread \"main\" java.lang.ArithmeticException: / by zero\n\tat code.main(code.java:5)\n"
            ]
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================



module.exports = tests;
