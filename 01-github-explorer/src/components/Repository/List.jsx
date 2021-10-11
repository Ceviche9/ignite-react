import React from 'react'

import { RepositoryItem } from './Item'

const repository = {
  name: "unform",
  description: "Form in React",
  link: "https://github.com/unform/unform"
}

export function Repository() {
  return(
    <section  className="repository-list" >
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}