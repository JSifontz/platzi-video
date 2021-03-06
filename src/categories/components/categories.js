import React, { Component } from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from '../../playlist/components/media.js'

function Categories(props) {
	return (
    <div className="Categories">
      <Search />
      {
        props.isLoading &&
        <p>Buscando tus videos favoritos...</p>
      }
      {
        props.search.map((item) => {
          return (
            <Media
              title  = {item.get('title')}
              author = {item.get('author')}
              type   = {item.get('type')}
              cover  = {item.get('cover')}
              src    = {item.get('src')}
              id     = {item.get('id')}
              key    = {item.get('id')} 
              openModal = {props.handleOpenModal}
            />
          )
        })
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories


// asi implemente el search
// {
// 	props.search[0] &&
// 	props.search[0].map( (item) => {
// 		console.log(item.get('id'))
// 		return <Media {...item.toJS()} key={item.get('id')} />
// 	})
// }