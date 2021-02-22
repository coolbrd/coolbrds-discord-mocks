"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
jest.mock("discord.js");
function createMockedMessage(options) {
    var mockedClient = options && options.client !== undefined ? options.client : new discord_js_1.Client();
    var mockedGuild = options && options.guild !== undefined ? options.guild : new discord_js_1.Guild(mockedClient, {});
    var mockedChannel = options && options.channel !== undefined ? options.channel : new discord_js_1.TextChannel(mockedGuild);
    var mockedUser = options && options.author !== undefined ? options.author : new discord_js_1.User(mockedClient, {});
    var mockedMember = options && options.member !== undefined ? options.member : new discord_js_1.GuildMember(mockedClient, {}, mockedGuild);
    var mockedMessage = new discord_js_1.Message(mockedClient, {}, mockedChannel);
    mockedMessage.client = mockedClient;
    mockedMessage.guild = mockedGuild;
    mockedMessage.channel = mockedChannel;
    mockedMessage.author = mockedUser;
    mockedMessage.member = mockedMember;
    return mockedMessage;
}
exports.default = createMockedMessage;
