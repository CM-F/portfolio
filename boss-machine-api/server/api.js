const express = require('express');
const { createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');


// Routers handling
const apiRouter = express.Router();
const minionsRouter = express.Router({mergeParams: true});
const ideasRouter = express.Router({mergeParams: true});
const meetingsRouter = express.Router({mergeParams: true});

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);


// minions routes
minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions'); 
    res.send(minions);
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send('Minion not found');
    }
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const updatedMinion = req.body;
    updatedMinion.id = minionId;
    const updateDatabase = updateInstanceInDatabase('minions', updatedMinion);
    if (updateDatabase) {
        res.send(updateDatabase);
    } else {
        res.status(404).send('Minion not found or invalid data');
    }
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const deletedMinion = deleteFromDatabasebyId('minions', minionId);
    if (deletedMinion) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


// works routes for minions
minionsRouter.get ('/:minionId/work', (req, res, next) => {
    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (!minion) {
        res.status(404).send('Minion not found');
    }

    const allWork = getAllFromDatabase('work');
    const minionWork = allWork.filter(work => work.minionId === req.params.minionId);
    res.send(minionWork);
});

minionsRouter.put ('/:minionId/work/:workId', (req, res, next) => {
    const workId = req.params.workId;
    const work = getFromDatabaseById('work', workId);

    if (!work ) {
        return res.status(404).send();
    }

    if (work.minionId !== req.params.minionId) {
        return res.status(400).send('Work does not belong to this minion');
    }

    const updatedWork = req.body;
    updatedWork.id = workId;
    updatedWork.minionId = req.params.minionId;
    const updateDatabase = updateInstanceInDatabase('work', updatedWork);

    if (updateDatabase) {
        res.send(updateDatabase);
    } else {
        res.status(404).send('Work not found or invalid data');
    }
});

minionsRouter.post ('/:minionId/work', (req, res, next) => {
    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (!minion) {
        res.status(404).send('Minion not found');
    }
    const newWork = req.body;
    newWork.minionId = req.params.minionId;
    const workAdded = addToDatabase('work', newWork);
    res.status(201).send(workAdded);
});

minionsRouter.delete ('/:minionId/work/:workId', (req, res, next) => {
    const workId = req.params.workId;
    const work = getFromDatabaseById('work', workId);

    if (!work || work.minionId !== req.params.minionId) {
        return res.status(404).send('Work not found or does not belong to this minion');
    }

    const deleteWork = deleteFromDatabasebyId('work', workId);
    if (deleteWork) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


// ideas routes
ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas'); 
    res.send(ideas);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send('Minion not found');
    }
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;

    if (!/^\d+$/.test(ideaId)) {
        return res.status(404).send('Idea not found');
    }

    const existingIdea = getFromDatabaseById('ideas', ideaId);
    if (!existingIdea) {
        return res.status(404).send('Idea not found');
    }

    checkMillionDollarIdea(req, res, () => {
        const updatedIdea = req.body;
        updatedIdea.id = ideaId;
        const updateDatabase = updateInstanceInDatabase('ideas', updatedIdea);
        if (updateDatabase) {
            res.send(updateDatabase);
        } else {
            res.status(404).send('Idea not found or invalid data');
        }
    });
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const deletedIdea = deleteFromDatabasebyId('ideas', ideaId);
    if (deletedIdea) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});


// meetings routes
meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings'); 
    res.send(meetings);
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    const deletedMeetings = deleteAllFromDatabase('meetings');
    if (deletedMeetings) {
        res.status(204).send();
    } else {
        res.status(404).send(404);
    }
});


module.exports = apiRouter;