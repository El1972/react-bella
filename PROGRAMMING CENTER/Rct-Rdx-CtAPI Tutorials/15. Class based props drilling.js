// import React, { Component } from "react";
// import Book from "./Book";
// import data from '../data'


// class Practice extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: data,
//             calling: 'John',
//             count: 1
//         }
//     }

//     handleAdd = () => {
//         this.setState({ count: this.state.count + 1 })
//     }


//     render() {
//         return (
//             <div>
//                 <h2>This is our BookList</h2>
//                 <div
//                     name={this.state.name}
//                     handleAdd={this.handleAdd}
//                 >
//                 </div>
//             </div>
//         );
//     }
// }

// export default Practice;




// import React, { Component } from 'react'

// class Book extends Component {


//     render() {

//         const { calling, handleAdd } = this.props

//         return (
//             <div>
//                 <h4>{calling}</h4>
//                 <button handleAdd={handleAdd}></button>
//             </div>
//         )
//     }
// }

// export default Book;