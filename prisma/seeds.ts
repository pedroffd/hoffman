const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Insert data into the "users" table
        const userData = [
            { email: 'staff_medium_contacts@medroster.com', encrypted_password: 'encrypted_password', first_name: 'Staff', last_name: 'Medium Contacts', gender: 'F', phone_number: '9998880000', type: 'Staff', confirmed_at: new Date(), is_root: false },
            { email: 'patient_1@medroster.com', encrypted_password: 'encrypted_password', first_name: '1', last_name: 'Patient', gender: 'F', phone_number: '9998880001', type: 'Patient', confirmed_at: new Date(), is_root: false },
            { email: 'patient_2@medroster.com', encrypted_password: 'encrypted_password', first_name: '2', last_name: 'Patient', gender: 'F', phone_number: '9998880002', type: 'Patient', confirmed_at: new Date(), is_root: false },
        ];

      // Insert data into the "places" table
        const placeData = [
            { name: 'Medical Office1', npi: '1111111111', phone: '1111111111', address: '803 Central Ave', city: 'Seal Beach', state: 'CA', zip: '90740' },
            { name: 'Medical Office2', npi: '2222222222', phone: '2222222222', address: '16601 Pacific Coast Hwy', city: 'Huntington Beach', state: 'CA', zip: '92649' },
            { name: 'Medical Office3', npi: '3333333333', phone: '3333333333', address: '1617 Westcliff Dr', city: 'Newport Beach', state: 'CA', zip: '92660' },
        ];

    // Insert data into the "practice_data" table
        const practiceData = [
            { name: 'Pedro Practice', address: '9911 se 92nd ave', city: 'happy valley', state: 'OR', zip: '97086', phone: '9718672102', npi: '9999999988' },
            { name: 'Practice Data2', address: '4321 Thor Blvd.', city: 'new york', state: 'NY', zip: '12397', phone: '0987654321', npi: '9999999977' },
            { name: 'Practice Data3', address: '1111 Mifflin Pl.', city: 'philly', state: 'PA', zip: '32397', phone: '1112223333', npi: '9999999955' },
        ];

// Insert data into the "practitioner_data" table
        const practitionerData = [
            { first_name: 'Chris', last_name: 'Whitman', gender: 'M', npi: '1010101010' },
            { first_name: 'John', last_name: 'Smith', gender: 'M', npi: '1110101010' },
            { first_name: 'Karen', last_name: 'Jones', gender: 'F', npi: '1011101010' },
        ];

      // Insert data into the "practitioner_data" table
        for (const data of userData) {
            await prisma.users.create({ data });
        }

       // Create records for the "places" table
        for (const data of placeData) {
            await prisma.places.create({ data });
        }

       // Create records for the "practice_data" table
        for (const data of practiceData) {
            await prisma.practice_data.create({ data });
        }

      // Create records for the "practitioner_data" table
        for (const data of practitionerData) {
            await prisma.practitioner_data.create({ data });
        }

        console.log('Data entered successfully.');
    } catch (error) {
        console.error('Error when entering data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
