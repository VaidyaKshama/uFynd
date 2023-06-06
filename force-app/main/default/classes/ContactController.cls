/**
 * @description       : ContactController class takes care of functionalities on contacts
 * @last modified on  : 06-06-2023
 **/
public with sharing class ContactController {
    /**
     * @description : Method fetches a list of contacts
     * @return List<Contact> 
     **/
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        try {
            List<Contact> contacts = [SELECT FirstName, LastName, Email FROM Contact WITH SECURITY_ENFORCED ];
            return contacts != null ? contacts : new List<Contact>();
        } catch (Exception e) {
            throw new AuraHandledException('Exception occurred during contact retrieval: ' + e.getMessage());
        }
    }
}