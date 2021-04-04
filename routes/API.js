const router = require("express").Router();
const Activity = require('../models/activity')

router.get("/api/workouts", (req, res) => {
    Activity.find({})
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/api/workouts/:workout", ({ params, body }, res) => {
    
});

router.post("/api/workouts", ({ body }, res) => {
    Activity.create(body)
      .then(newActivity => {
        res.json(newActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
  


module.exports = router;/*
const db = require('../models/activity')
module.exports = (app) => {

    //////Workout Routes//////
    //get all
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });
    //add excerise, set id, push to model, set true
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {excercises:body }},
                                    { upsert: true, useFindandModify:false},
                                    updatedWorkout => {
                                        res.json(updatedWorkout);
                                    })
    });
    //create new workout
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}*/
