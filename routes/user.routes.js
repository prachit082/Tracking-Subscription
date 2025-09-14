import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req,res) => res.send({title: 'Get All Users'}));

userRouter.get('/:id', (req,res) => res.send({title: 'Get User Details'}));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;