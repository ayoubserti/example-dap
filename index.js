var Adapter = require("vscode-debugadapter");
var net = require("net");
var session;
session = new Adapter.DebugSession(true, false);
var socket = net.connect(19815, "localhost");
session.start(socket, socket);
