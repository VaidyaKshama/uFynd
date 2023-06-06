/**
 * @description       : Test class for contactCOntroller
 * @last modified on  : 06-06-2023
**/
@isTest
private class ContactControllerTest {
    
    @isTest
    static void testGetContactsMethod() {
        // Test Scenario 1: Valid contacts exist in the database
        List<Contact> testContacts = new List<Contact>();
        testContacts.add(new Contact(FirstName = 'John', LastName = 'Doe', Email = 'john.doe@example.com'));
        testContacts.add(new Contact(FirstName = 'Jane', LastName = 'Smith', Email = 'jane.smith@example.com'));
        insert testContacts;

        Test.startTest();
        List<Contact> result = ContactController.getContacts();
        Test.stopTest();

        System.assertEquals(2, result.size());
        System.assertEquals('John', result[0].FirstName);
        System.assertEquals('Doe', result[0].LastName);
        System.assertEquals('john.doe@example.com', result[0].Email);
        System.assertEquals('Jane', result[1].FirstName);
        System.assertEquals('Smith', result[1].LastName);
        System.assertEquals('jane.smith@example.com', result[1].Email);
    }

    @isTest
    static void testGetContactsNoContacts() {
        // Test Scenario 2: No contacts exist in the database
        List<Contact> testContacts = new List<Contact>();
        delete testContacts;

        Test.startTest();
        List<Contact> result = ContactController.getContacts();
        Test.stopTest();

        System.assertEquals(0, result.size());
    }
}
