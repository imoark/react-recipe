import express from 'express';
import recipe from '../src/recipe';

const router = express.Router();

router.get('/recipe', (req,res) => {
	res.send(recipe);
});

export default router;