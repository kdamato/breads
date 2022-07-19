const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
          </div>
          <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
          </div>
        <ul>
          {
            breads.map(function(bread, index){
              return (
                <ul key={index}>
                  <a href={`/breads/${bread.id}`}>
                      {bread.name}
                  </a>
                  <li>{bread.getBakedBy()}</li>
                </ul>
              )
            }) 
          }
        </ul>
      </Default>
      
    )
}

module.exports = Index
