const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;

    if (numWeeks === undefined || weeklyRevenue === undefined) {
        return res.status(400).send();
    }

    const numWeeksNumber = Number(numWeeks);
    const weeklyRevenueNumber = Number(weeklyRevenue);
    
    if (isNaN(numWeeksNumber) || isNaN(weeklyRevenueNumber)) {
        return res.status(400).send("numWeeks and weeklyRevenue must be valid numbers");
    }

    const product = Number(numWeeksNumber) * Number(weeklyRevenueNumber);
    
    if (product < 1000000){
        return res.status(400).send('Idea must be at least one MILLION dollars !');
    }

    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
