import { Client, DMChannel, Guild, GuildMember, Message, NewsChannel, TextChannel, User } from "discord.js";

jest.mock("discord.js");

export default function createMockedMessage(options?: { client?: Client, data?: any, guild?: Guild | null, channel?: TextChannel | DMChannel | NewsChannel, author?: User, member?: GuildMember | null }): Message {
    let mockedClient: Client;
    if (options && options.client) {
        mockedClient = options.client;
    }
    else {
        mockedClient = new Client();
    }

    let mockedGuild: Guild | null;
    if (options && options.guild !== undefined) {
        mockedGuild = options.guild;
    }
    else {
        mockedGuild = new Guild(mockedClient, {});
    }

    let mockedChannel: TextChannel | DMChannel | NewsChannel;
    if (options && options.channel) {
        mockedChannel = options.channel;
    }
    else {
        if (mockedGuild) {
            mockedChannel = new TextChannel(mockedGuild);
        }
        else {
            mockedChannel = new DMChannel(mockedClient);
        }
    }

    let mockedUser: User;
    if (options && options.author) {
        mockedUser = options.author;
    }
    else {
        mockedUser = new User(mockedClient, {});
    }

    let mockedMember: GuildMember | null;
    if (options && options.member !== undefined) {
        mockedMember = options.member;
    }
    else {
        if (mockedGuild) {
            mockedMember = new GuildMember(mockedClient, {}, mockedGuild);
        }
        else {
            mockedMember = null;
        }
    }

    const mockedMessage = new Message(mockedClient, {}, mockedChannel);
    (mockedMessage as any).client = mockedClient;
    (mockedMessage as any).guild = mockedGuild;
    (mockedMessage as any).channel = mockedChannel;
    (mockedMessage as any).author = mockedUser;
    (mockedMessage as any).member = mockedMember;

    return mockedMessage;
}