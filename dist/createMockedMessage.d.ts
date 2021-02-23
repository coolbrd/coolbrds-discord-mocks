import { Client, DMChannel, Guild, GuildMember, Message, NewsChannel, TextChannel, User } from "discord.js";
export default function createMockedMessage(options?: {
    client?: Client;
    data?: any;
    guild?: Guild | null;
    channel?: TextChannel | DMChannel | NewsChannel;
    author?: User;
    member?: GuildMember | null;
}): Message;
