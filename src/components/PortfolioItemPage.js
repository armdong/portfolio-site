import React from 'react'

const PortfolioItemPage = ({ match }) => (
  <div>
    <h1>A Thing I've Done</h1>
    <p>This page is for the item with the id of {match.params.id}.</p>
  </div>
)

export default PortfolioItemPage