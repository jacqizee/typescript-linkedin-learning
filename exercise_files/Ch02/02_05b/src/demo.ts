interface Contact {
    id: number;
    name: string;
    clone(name: String): Contact
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}