interface Contact {
    id: number;
    name: string;
}

interface UserContact<TExternalId> {
    username: string
    id: number;
    name: string;
    externalId: TExternalId
    loadExternalId(): Task<TExternalId>
}

function clone<T>(source: T): T {
    return Object.apply({}, source);
} 

function cloneAgain<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
} 

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)
const c = cloneAgain<Contact, UserContact>(a)

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)