

## Installation

To use the Contact List LWC in your Salesforce org, follow these steps:

1. Ensure that you have the necessary permissions to create Lightning Web Components.
2. Clone or download the code from the repository.
3. Deploy the `ContactList` component to your Salesforce org using your preferred deployment method (e.g., Salesforce CLI, Metadata API, etc.).
4. Assign the appropriate user permissions to access the `ContactList` component.

## Usage

To use the Contact List component in a Lightning App or Lightning Record Page, follow these steps:

1. Open the page or app builder in Salesforce.
2. Drag and drop the `ContactList` component onto the desired location.
3. Save the changes and activate the page or app.
4. The Contact List component will now display the contact details in a paginated datatable.


# Contact List Lightning Web Component

The Contact List Lightning Web Component is a Salesforce component that retrieves contact records using an Apex controller and displays them in a lightning-datatable.

## Features

- Retrieves a list of contacts using the `getContacts()` method in the `ContactController` Apex class.
- Displays contact records in a table format using the `contactList` component based on the `lightning-datatable` base component.
- Shows contact details such as First Name, Last Name, and Email in the table.
- Provides a seamless integration between Apex and Lightning Web Components using the @wire decorator.
- Supports pagination with Previous Page and Next Page buttons.
- Shows total record count, current page number, and total page count.
- The ContactControllerTest Apex test class is used to test the functionality of the ContactController
- It ensure that the ContactController class is working as expected.

## Features

- Tests the `getContacts()` method of the `ContactController` class.
- Covers positive scenarios to validate the successful retrieval of contact records.
## Installation

To use the Contact List Lightning Web Component in your Salesforce org, follow these steps:

1. Clone or download the code from the repository.
2. Deploy the `ContactController` Apex class to your Salesforce org using your preferred deployment method (e.g., Salesforce CLI, Metadata API, etc.).
3. Deploy the `contactList` Lightning Web Component to your Salesforce org using your preferred deployment method.
4. Deploy the `ufynd_App` Application to your Salesforce org using your preferred deployment method.
5. Add the `contactList` component to the App page using the Lightning App Builder or by editing the source code of the App page.
6. Save the changes and activate the App page.
7. Deploy the `ContactControllerTest` Apex test class to your Salesforce org using your preferred deployment method

## Usage

Once you have installed and added the Contact List Lightning Web Component to your Salesforce org, follow these steps to use it:

1. Navigate to the ufynd_App page where you can see the Contact List component.
2. The component will automatically retrieve the contact records using the `getContacts()` method in the `ContactController` Apex class.
3. The contact records will be displayed in a table format, with columns for First Name, Last Name, and Email.

