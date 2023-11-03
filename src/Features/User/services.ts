import { type actionType } from '../../Types/router'
import * as UserRepository from './repository'

export const store: actionType = async (req, res): Promise<void> => {
  const result = await UserRepository.store(req.body)
  res.status(201).json(result)
}

export const show: actionType = async (req, res): Promise<void> => {
  res.status(200).json('show')
}

export const update: actionType = async (req, res): Promise<void> => {
  if (req.method === 'PUT') { res.status(200).json('Update Put') } else { res.status(200).json('Update Patch') }
}

export const del: actionType = async (req, res): Promise<void> => {
  res.status(200).json('Delete')
}
