import * as Adapter from "vscode-debugadapter"
import * as net  from "net"

let session : Adapter.DebugSession;
session = new Adapter.DebugSession(false);
let socket = net.connect(12345,"localhost")
socket.on("data",(data)=>{
    console.log(data.toString());
})

console.log("We are starting")
session.start(socket,socket)
let args = {
    adapterID: this._debugType,
    linesStartAt1: true,
    columnsStartAt1: true,
    pathFormat: 'path'
};
session.sendRequest("initialize",args,100,(resp)=>{
    console.log(resp);
    session.sendRequest("attach",{}, 100, (resp1)=>{
        console.log(resp1);
    })
});
