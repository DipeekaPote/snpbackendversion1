const ProposalesAndElsTemplate = require('../models/proposalsandelsModel');
const mongoose = require("mongoose");

//get all ProposalesAndElsTemplate
const getProposalesAndElsTemplates = async (req, res) => {
    try {
        const proposalesAndElsTemplates = await ProposalesAndElsTemplate.find({}).sort({ createdAt: -1 });
        res.status(200).json({ message: "ProposalesAndEls Template retrieved successfully", proposalesAndElsTemplates });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

//Get a single ServiceTemplate
const getProposalesAndElsTemplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ProposalesAndEls Template ID" });
    }

    try {
        const proposalesAndElsTemplate = await ProposalesAndElsTemplate.findById(id);
        if (!proposalesAndElsTemplate) {
            return res.status(404).json({ error: "No such ProposalesAndEls Template" });
        }

        res.status(200).json({ message: "ProposalesAndEls Template retrieved successfully", proposalesAndElsTemplate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//POST a new ServiceTemplate 
const createProposalesAndElsTemplate = async (req, res) => {
    const { templatename, teammember, proposalname, introduction, terms, servicesandinvoices, introductiontext, termsandconditions, servicesandinvoiceid, custommessageinemail, custommessageinemailtext, reminders, daysuntilnextreminder, numberofreminder, active } = req.body;
    try {
        const existingTemplate = await ProposalesAndElsTemplate.findOne({
            templatename
        });
        if (existingTemplate) {
            return res.status(400).json({ message: "ProposalesAndEls Template already exists" });
        }
        const newProposalesAndElsTemplate = await ProposalesAndElsTemplate.create({  templatename, teammember, proposalname, introduction, terms, servicesandinvoices, introductiontext, termsandconditions, servicesandinvoiceid, custommessageinemail, custommessageinemailtext, reminders, daysuntilnextreminder, numberofreminder, active });
        return res.status(201).json({ message: "ProposalesAndEls Template created successfully", newProposalesAndElsTemplate });

    } catch (error) {
        console.error("Error creating ProposalesAndEls Template:", error);
        return res.status(500).json({ error: "Error creating ProposalesAndEls Template" });
    }
};


//delete a ServiceTemplate

const deleteProposalesAndElsTemplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ProposalesAndEls Template ID" });
    }
    try {
        const deletedProposalesAndElsTemplate = await ProposalesAndElsTemplate.findByIdAndDelete({ _id: id });
        if (!deletedProposalesAndElsTemplate) {
            return res.status(404).json({ error: "No such ProposalesAndEls Template" });
        }
        res.status(200).json({ message: "ProposalesAndEls Template deleted successfully", deletedProposalesAndElsTemplate });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//update a new ServiceTemplate 
const updateProposalesAndElsTemplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ProposalesAndEls Template ID" });
    }

    try {
        const updatedProposalesAndElsTemplate = await ProposalesAndElsTemplate.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );

        if (!updatedProposalesAndElsTemplate) {
            return res.status(404).json({ error: "No such ProposalesAndEls Template" });
        }

        res.status(200).json({ message: "ProposalesAndEls Template Updated successfully", updatedProposalesAndElsTemplate });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



//Get a single JobTemplate List
const getProposalesAndElsTemplateById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ProposalesAndEls Template ID" });
    }
    try {
        const proposalesAndElsTemplate = await ProposalesAndElsTemplate.findById(id)
         .populate({ path: 'teammember', model: 'User' })
         .populate({ path: 'servicesandinvoiceid', model: 'InvoiceTemplate' });
                 
        if (!proposalesAndElsTemplate) {
            return res.status(404).json({ error: "No such ProposalesAndEls Template" });
        }

        res.status(200).json({ message: "ProposalesAndEls Template retrieved successfully", proposalesAndElsTemplate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createProposalesAndElsTemplate,
    getProposalesAndElsTemplates,
    getProposalesAndElsTemplate,
    deleteProposalesAndElsTemplate,
    updateProposalesAndElsTemplate,
    getProposalesAndElsTemplateById
}