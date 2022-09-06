interface Contact extends Address {
  id: number
  name: string
  birthDate?: Date
}

interface Address {
  line1: string
  line2: string
  region: string
  postalCode: string
}

let primaryContact: Contact = {
  birthDate: new Date('01/06/1970'),
  id: 1234,
  name: 'Jamie Johnson',
  line1: 'line1',
  line2: 'line2',
  region: 'Holland',
  postalCode: '2345AB'
}