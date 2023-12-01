const model = require("../../models/models");

exports.saveEmailInfo = async function (data) {
    return await model.email.create(data);
}


// exports.fetchAllEmailInfo = async function () {
//     return await model.email.find().sort({ _id: -1 }).limit(10);
    
// }

// const model = require('./your_model_file'); // Replace with the actual file path where your model is defined

exports.fetchAllEmailInfo = async function () {
    try {
        // Use the 'email' model to find documents, sort them, and limit the results to 10
        console.log("🙈 🙉 🙊 Line 18 ~  :  ");
        const emails = await model.email.find().sort({ _id: -1 }).limit(10).maxTimeMS(20000); // Set timeout to 10 seconds
        
        // Return the result
        return emails;
    } catch (error) {
        // Handle any errors that might occur during the query
        console.error('Error fetching email info:', error);
        throw error; // You may want to handle or log the error appropriately in your application
    }
};
