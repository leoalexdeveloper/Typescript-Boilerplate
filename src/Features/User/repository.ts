interface userStoreInterface {
  name: string
  email: string
  password: string
  confirmation: string
}

export const store = async (data: userStoreInterface): Promise<userStoreInterface> => {
  return data
}
