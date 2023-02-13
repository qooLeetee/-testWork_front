import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Contact } from 'src/models/Contact';
import { Theme } from 'src/models/Theme';
import { Message } from 'src/models/Message';
import { Observable } from 'rxjs';

@Injectable()

export class DataService{
    private host = "http://localhost:7247/api/DataSend/"

    constructor(private http: HttpClient) {}

    createContact(contact: Contact) {
        return this.http.post(this.host + "contacts", contact);
    }

    getContacts() {
        return this.http.get(this.host + "contacts");
    }

    createTheme(theme: Theme) {
        return this.http.post(this.host + "themes", theme);
    }

    getThemes(): Observable<Theme[]> {
        return this.http.get<Theme[]>(this.host + "themes");
    }

    createMessage(message: Message) {
        return this.http.post(this.host + "messages", message);
    }

    getMessages() {
        return this.http.get(this.host + "messages");
    }

    checkconn(){
        return this.http.get(this.host + "ping");
    }
}