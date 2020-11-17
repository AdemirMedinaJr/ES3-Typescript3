import { Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Mark from '../models/Mark';
import { validate } from 'class-validator';

const markRouter = Router();

markRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Mark);
        const { description, student } = request.body;
        const mark = repo.create({
            description,
            student,
        });
        const errors = await validate(mark);
        if (errors.length == 0) {
            const res = await repo.save(mark);
            await getConnection().queryResultCache?.remove(['listMark'])
            return response.status(201).json(res);
        }
        return response.status(400).json(errors);
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send()
    }
})

markRouter.get('/', async (request, response) => {
    response.json(await getRepository(Mark).find({ cache: { id: 'listMark', milliseconds: 30000 } }))
})

export default markRouter;