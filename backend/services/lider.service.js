import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export function allLider() {
  return client.lider.findMany()
}


export function createLider(name, job, age) {
  return client.lider.create({
    data: {
      name,
      job,
      age
    }
  })
}


export function updateLider(id, name, job, age) {
  return client.lider.update({
    data: {
      name,
      job,
      age
    },
    where: {
      id
    }
  })
}

export function deleteLider(id) {
  return client.lider.delete({
    where: {
      id
    }
  })
}