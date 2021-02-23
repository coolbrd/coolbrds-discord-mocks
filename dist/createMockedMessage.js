"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
jest.mock("discord.js");
function createMockedMessage(options) {
    var mockedClient;
    if (options && options.client) {
        mockedClient = options.client;
    }
    else {
        mockedClient = new discord_js_1.Client();
    }
    var mockedGuild;
    if (options && options.guild !== undefined) {
        mockedGuild = options.guild;
    }
    else {
        mockedGuild = new discord_js_1.Guild(mockedClient, {});
    }
    var mockedChannel;
    if (options && options.channel) {
        mockedChannel = options.channel;
    }
    else {
        if (mockedGuild) {
            mockedChannel = new discord_js_1.TextChannel(mockedGuild);
        }
        else {
            mockedChannel = new discord_js_1.DMChannel(mockedClient);
        }
    }
    var mockedUser;
    if (options && options.author) {
        mockedUser = options.author;
    }
    else {
        mockedUser = new discord_js_1.User(mockedClient, {});
    }
    var mockedMember;
    if (options && options.member !== undefined) {
        mockedMember = options.member;
    }
    else {
        if (mockedGuild) {
            mockedMember = new discord_js_1.GuildMember(mockedClient, {}, mockedGuild);
        }
        else {
            mockedMember = null;
        }
    }
    var mockedMessage = new discord_js_1.Message(mockedClient, {}, mockedChannel);
    mockedMessage.client = mockedClient;
    mockedMessage.guild = mockedGuild;
    mockedMessage.channel = mockedChannel;
    mockedMessage.author = mockedUser;
    mockedMessage.member = mockedMember;
    return mockedMessage;
}
exports.default = createMockedMessage;
