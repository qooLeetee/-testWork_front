import { Contact } from "./Contact";
import { Theme } from "./Theme";

export class Message{
    constructor(public id?: string, public theme: Theme = new Theme(), public contact: Contact = new Contact(), public content?: string){}
}