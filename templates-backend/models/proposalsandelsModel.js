const mongoose = require('mongoose');

const proposalesandelsSchema = new mongoose.Schema({

    templatename: {
        type: String,
        required: [true, 'Template name is required'],
        trim: true
    },

    teammember: [{
        type: Array,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    proposalname: {
        type: String,
    },

    introduction: {
        type: Boolean,
    },

    terms: {
        type: Boolean,
    },

    servicesandinvoices: {
        type: Boolean,
    },

    introductiontext: {
        type: String,
    },

    termsandconditions: {
        type: String,
    },

    servicesandinvoiceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InvoiceTemplate',
    },

    custommessageinemail: {
        type: Boolean
    },

    custommessageinemailtext: {
        type: String
    },

    reminders: {
        Type: Boolean,
    },

    daysuntilnextreminder : {
        type : Number
    },

    numberofreminder : {
        type : Number
    },

    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const ProposalesAndEls = mongoose.model('ProposalesAndEls', proposalesandelsSchema);
module.exports = ProposalesAndEls;
