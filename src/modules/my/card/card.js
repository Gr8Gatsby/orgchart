import { LightningElement, api, track } from 'lwc';

export default class Card extends LightningElement {
    @api personName;
    @api personTitle;
    @api personImage;
    @api module;

    @track name;
    @track title;
    @track Image;
}
