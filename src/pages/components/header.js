import React from "react"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <h2>{props.arbitraryPhrase}</h2>
    </div>
  )
}

//to use a variable or variable property use {}
// directly a text can be used between element tags
