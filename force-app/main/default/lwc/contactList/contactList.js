import { LightningElement, wire } from 'lwc';
import getContactList from "@salesforce/apex/ContactController.getContacts";
const columns = [
    {
        label: 'First Name',
        fieldName: 'FirstName',
        type: 'url',
        typeAttributes: {label: { fieldName: 'FirstName' }, 
        target: '_blank'},
        sortable: true
    },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class ContactList extends LightningElement {
error;
columns = columns;
contactList = [];
contatsToDisplay = [];
recordsPerPage = 5;
pageNumber;
isFirstPage;
isLastPage;
totalRecordCount;
totalPageCount;
pageNumber = 1;
@wire(getContactList) contacts ({ error, data }) {
    if (data) {
        let nameUrl;
        this.contactList = data.map(row => { 
            nameUrl = `/${row.Id}`;
            return {...row , nameUrl} 
        })  
        this.totalRecordCount = this.contactList.length;
        this.totalPageCount = Math.ceil(this.totalRecordCount / this.recordsPerPage);
        this.updatePageButtons();
        this.handlePageChange();
    } else if (error) { 
       this.error = error;  
    }   
    }
    handlePageChange(){
        if(this.recordsPerPage === undefined) this.recordsPerPage = 5;
        this.contatsToDisplay = [];
        for (let index =((this.pageNumber-1) * this.recordsPerPage) ; index < this.pageNumber * this.recordsPerPage; index++) {
            if (this.contactList[index] !== undefined){
                var element = this.contactList[index];
                this.contatsToDisplay.push(element);
            }
            this.updatePageButtons();
            
        }
    }

    handleNextPage(event){
        if(this.pageNumber < this.totalPageCount){
            this.pageNumber = this.pageNumber + 1;
        }
        this.handlePageChange();
    }

    handlePrevPage(event){
        if(this.pageNumber > 1){
            this.pageNumber = this.pageNumber - 1;
        }
        this.handlePageChange();
    }
    updatePageButtons(){
        if(this.pageNumber === 1){
            this.isFirstPage = true;
        }
        else {
            this.isFirstPage = false;
        }
        if(this.pageNumber > this.totalPageCount){
            this.isLastPage = true;
        }
        else {
            this.isLastPage = false;
        }
    }
}