import { Client, DMChannel, Guild, GuildMember, Message, NewsChannel, TextChannel, User } from "discord.js";
export declare function createMockedMessage(options?: {
    client?: Client;
    data?: any;
    guild?: Guild;
    channel?: TextChannel | DMChannel | NewsChannel;
    author?: User;
    member?: GuildMember;
}): Message;
