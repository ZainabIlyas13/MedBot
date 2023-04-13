// router/todo.js
import express from 'express';

import { getAllMedbot, postCreateMedbot,putUpdateMedbot}from "../controller/Csignup.js";
const router = express.Router();
/**
 * @route GET api/medbot
 * @description get medbot
 * @access public
 */
router.get("/:id",getAllMedbot);

/**
 * @route POST api/medbot
 * @description add a new medbot
 * @access public
 */
router.post("/",postCreateMedbot);

/**
 * @route PUT api/medbot/:id
 * @description update medbot
 * @access public
 */
router.put("/:id",putUpdateMedbot);



export default router;