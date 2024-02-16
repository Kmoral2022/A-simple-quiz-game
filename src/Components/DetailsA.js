import React from "react";

function Details() {
    return (
        <section>
            <h1 onMouseDown={(event) => {
                alert("Hey! Anything the Matter");
            }} className="hover-me">Hello World!</h1>
        </section>
    )
}

export default Details;