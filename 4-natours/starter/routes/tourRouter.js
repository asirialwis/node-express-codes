const express = require('express')
const tourController = require('./../controller/tourController')
const router = express.Router();

router.param('id',tourController.checkID);

//create checkbody Middleware
//check if body contains the name and price property
//if not send back 400(bad request)

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router;    