const React = require('react')
const Default = require('./layouts/Default')

// function Show ({bread}) {
//   console.log(bread.name)
//     return (
//       <Default>
//         <h2>Show Page</h2>
//       </Default>
//     )
// }

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
   return (
          <Default>
    <h3>{bread.name}</h3>
    <p>
      and it
      {
        bread.hasGluten
        ? <span> does </span>
        : <span> does NOT </span>
      }
      have gluten.
    </p>
    <img src={bread.image} alt={bread.name} />
    <li><a href="/breads">Go home</a></li>
    <body>
    <div className="wrapper">
    <header>
      <h1><a href="/breads">BreadCRUD</a></h1>
    </header>
    <div className="container">
    </div>
    <div>     
      <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
      </form>
    </div>
  </div>
  </body>
  </Default>
          )
      }
  

module.exports = Show
