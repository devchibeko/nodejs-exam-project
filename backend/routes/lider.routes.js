import { Router } from "express";
import { createLider, updateLider, deleteLider, allLider } from "../services/lider.service.js";
import { handleError } from './util.js'

const router = Router()

router.get('/liders', async (req, res) => {
  allLider()
    .then(lider => res.json({
      message: 'All Liders',
      lider
    }))
    .catch(err => handleError('All Liders', err, res))
})


router.post('/liders', async (req, res) => {
  let { name, job, age } = req.body
  createLider(name, job, age)
  .then(lider => res.json({
    message: 'Create Liders', 
    lider
  }))
    .catch(err => handleError('Create Liders', err, res))
})


router.put('/liders/:id', async (req, res) => {
  let { name, job, age } = req.body
  let id = +req.params.id
  updateLider(id, name, job, age)
    .then(lider => res.json(lider))
    .catch(err => handleError('Updata Liders', err, res))
})

router.delete('/liders/:id', async (req, res) => {
  deleteLider(+req.params.id)
  .then(lider => res.json(lider))
  .catch(err => handleError('Delete Liders', err, res))
})

export default router