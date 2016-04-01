var tests = [];
var key = "tkjxrf";


//===============================================================================================================================================================================






test = {desc: "compile error java",
    lang: "java",
    req: {
        "userName": "any name",
        "serverSecret": key,
        "code": "import java.util.Scanner;\n public class test {\n    public static void main(String[] args) {\n   Scanner in = new Scanner(System.in);\n   for(int i=0; i<1000000 i++){} \n     int a = in.nextInt();\n   int b = in.nextInt();\n        System.out.print(a+b);\n    }\n}",
        "language":"java",
        "testCases":["2 4", "4 5"]
    },
    "resBody": {
        "code": 200,
        "response": {
            "dockerError": null,
            "compilerErrors": "code.java:5: error: ';' expected\n   for(int i=0; i<1000000 i++){} \n                         ^\n1 error\n",
            "stdout": [],
            "stderr": []
        }
    }
};

tests.push(test);

//===============================================================================================================================================================================



module.exports = tests;

