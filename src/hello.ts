import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";
import * as url from "url";
import {ParsedUrlQuery} from "querystring";

const NAME_PARAMETER = "name";

const hostname: string = "localhost";
const port: number = 1337;

console.log("Starting server..");

http.createServer(handleRequest).listen(port, hostname);

console.log("Server running at http://" + hostname + ":" + port + "/");
console.log("Example: http://" + hostname + ":" + port + "/?" + NAME_PARAMETER + "=Johannes");

function handleRequest(request: IncomingMessage, response: ServerResponse) {
    const parameters: ParsedUrlQuery = url.parse(request.url, true).query;
    let name = parameters[NAME_PARAMETER];

    if (name === undefined) {
        name = "world";
    }

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello " + name + "!");
    response.end();
}
