const Numbers = require('../models/Numbers');

async function getAverages(req, res) {
    try {
        const averages = await Numbers.find({});
        res.status(200).json(averages);
    } catch (error) {
        console.error('Error fetching averages:', error);
        res.status(500).json
        ({ 
            error: 'Internal Server Error' 
        });
    }
}

async function numberpost(req,res) {
    try{
        const {number} = req.body;
        if(!Array.isArray(number) || number.length === 0) {
            return res.status(400).json({ 
                error: 'Invalid input, expected an array of numbers' 
            });
        }
        const sum=number.reduce((acc, num) => acc + num, 0);
        const average = sum / number.length;

        const updatedNumer = await Numbers.create({number, average: average});

        res.status(200).json({ 
            average: updatedNumer
        });
    }
     catch (error) {
        console.error('Error posting number:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' 
        });
    }
}


module.exports = {
    getAverages,
    numberpost
};