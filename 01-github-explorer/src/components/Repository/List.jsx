import React, { useState, useEffect } from 'react'

import { RepositoryItem } from './Item'

import './styles/style.scss'

export function Repository() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list" >
      <h1>Lista de repositórios</h1>

      <ul>
        {
         repositories.map(repository => {
           return (
            <RepositoryItem key={repository.name} repository={repository}/>
           )
         } )
        }
  
      </ul>
    </section>
  )
}