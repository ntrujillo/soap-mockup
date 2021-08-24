const http = require('http');
const soap = require('soap');
var myService = {
    Calculator: {
        CalculatorSoap: {
            Add: function (args, cb, headers, req) {
                return {
                    AddResult: args.intA + args.intB
                };
            },
            Subtract: function (args, cb, headers, req) {
                return {
                    SubtractResult: args.intA - args.intB
                };
            },
            Multiply: function (args, cb, headers, req) {
                return {
                    MultiplyResult: args.intA * args.intB
                };
            },
            Divide: function (args, cb, headers, req) {
                return {
                    DivideResult: args.intA / args.intB
                };
            }
        }
    }
};

var xml = require('fs').readFileSync('calculator.wsdl', 'utf8');


//http server example
var server = http.createServer(function (request, response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function () {
    console.log('server initialized');
});


